<?php

require_once('../connection.php');
require "../controller.php";

class Ajax extends Controller
{
    public static $_conn;
    
    public function __construct()
    {
        parent::__construct();
        
        $conn           =   new Connection();
        self::$_conn    =   $conn->connection();
    }
    
    public function saveForm($form)
    {
        try
        {
            if( ! $form['name'])
                throw new Exception('Please enter your name');

            if( ! $form['email'])
                throw new Exception('Please enter your email');

            if( ! $form['subject'])
                throw new Exception('Please enter the subject');

            if( ! $form['message'])
                throw new Exception('Please enter the message');
            
            date_default_timezone_set('America/Los_Angeles');
            
            $sql    =   self::$_conn->prepare("INSERT INTO user_details(name, email, subject, message, date_contacted)
                            VALUES (:name, :email, :subject, :message, :date_contacted)");

            $sql->bindValue(':name', $form["name"], PDO::PARAM_STR);
            $sql->bindValue(':email', $form['email'], PDO::PARAM_STR);
            $sql->bindValue(':subject', $form['subject'], PDO::PARAM_STR);
            $sql->bindValue(':message', $form['message'], PDO::PARAM_STR);
            $sql->bindValue(':date_contacted', strtotime('now'), PDO::PARAM_INT);
            
            $result =   $sql->execute() ? 1 : 0;
            
            if($result)
                return json_encode(array('name' => $form['name']));
            else
                return json_encode(array('name' => 'error'));
            
            self::$_conn    =   null;
        }
        catch(Exception $e)
        {
            return $e->getMessage();
        }
    }
}