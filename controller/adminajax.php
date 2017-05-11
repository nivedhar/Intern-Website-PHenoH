<?php

session_start();
require_once('../connection.php');

class Adminajax
{
    public static $_conn;
    
    public function __construct()
    {
        $conn           =   new Connection();
        self::$_conn    =   $conn->connection();
    }
    
    public function athenticate($username, $password)
    {
        try
        {
            if( ! $username)
                throw new Exception('Please enter your username');

            if( ! $password)
                throw new Exception('Please enter your password');
            
            $sql    =   self::$_conn->prepare("SELECT id_admin FROM admin WHERE user_name = :user_name AND password = sha1(:password)");
            
            $sql->bindValue(':user_name', $username, PDO::PARAM_STR);
            $sql->bindValue(':password', $password, PDO::PARAM_STR);
            
            $sql->execute();
            $id_admin       =   $sql->fetch(PDO::FETCH_COLUMN);
            
            self::$_conn    =   null;
            
            if( ! $id_admin)
            {
                return json_encode(array('error' => 1, 'msg' => 'The Username or Password you entered was incorrect.'));
            }
            else
            {
                $_SESSION['id_admin']   =   $id_admin;
                return json_encode(array('error' => 0));
            }
        }
        catch(Exception $e)
        {
            return $e->getMessage();
        }
    }
    
    public function saveFacts($facts)
    {
        $final_facts      =   array();
        try
        {
            foreach($facts as $key => $fact)
            {
                if( ! $fact['id_fact'])
                    throw new Exception('Id Missing');
                
                if( ! $fact['description'])
                    throw new Exception('Please enter Description');
                
                if( ! $fact['fact'])
                    throw new Exception('Please enter Fact');
                
                if( ! $fact['icon_class'])
                    throw new Exception('Please enter icon class');
                
                $final_facts[$key]['id_fact']     =  $fact['id_fact'];
                $final_facts[$key]['description'] =  $fact['description'];
                $final_facts[$key]['fact']        =  $fact['fact'];
                $final_facts[$key]['icon_class']  =  $fact['icon_class'];
            }
            
            date_default_timezone_set('America/Los_Angeles');
            
            foreach($final_facts as $fact)
            {
                $sql    =   self::$_conn->prepare("INSERT INTO admin_fun_facts(id_fact, description, fact, icon_class)
                                VALUES (:id_fact, :description, :fact, :icon_class) ON DUPLICATE KEY UPDATE description = :description,
                                fact = :fact, icon_class = :icon_class");

                $sql->bindValue(':id_fact', $fact['id_fact'], PDO::PARAM_INT);
                $sql->bindValue(':description', $fact['description'], PDO::PARAM_STR);
                $sql->bindValue(':fact', $fact['fact'], PDO::PARAM_STR);
                $sql->bindValue(':icon_class', $fact['icon_class'], PDO::PARAM_STR);
                
                $result =   $sql->execute() ? 1 : 0;
            }
            
            if($result)
                return json_encode(array('error' => 0));
            else
                return json_encode(array('error' => 1));
            
            self::$_conn    =   null;
        }
        catch(Exception $e)
        {
            return $e->getMessage();
        }
    }
}

