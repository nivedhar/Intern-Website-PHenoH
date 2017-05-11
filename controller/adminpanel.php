<?php

session_start();
require "controller.php";

class AdminPanel
{
    public static $_conn;
    public function __construct()
    {   
        $conn           =   new Connection();
        self::$_conn    =   $conn->connection();
    }
    
    public function index()
    {
        if( ! $_SESSION['id_admin'])
            require_once('views/admin.html');
        else
        {
            $query          =   self::$_conn->prepare("SELECT id_fact, description, fact, icon_class FROM admin_fun_facts");
            $query->execute();
            $result         =   $query->fetchAll(PDO::FETCH_ASSOC);
            $tpl            =   $tpl_testimonial    =   null;
            $num            =   $count  =   0;
            
            foreach($result as $key => $row)
            {
                $row['num']   =   $num  =   $key + 1;
                $tpl        .=  self::Template('controller/fun_facts.php', $row);
            }
            
            $query_2          =   self::$_conn->prepare("SELECT id_testimonial, name, title, description FROM admin_testimonials");
            $query_2->execute();
            $testimonials     =   $query_2->fetchAll(PDO::FETCH_ASSOC);
            
            foreach($testimonials as $index => $testimonial)
            {
                $testimonial['count']   =   $count  =   $index + 1;
                $tpl_testimonial      .=  self::Template('controller/testimonial.php', $testimonial);
            }
            
            require_once('views/adminpanel.html');
        }
    }
    
    private function Template($file, $array)
    {
        if (file_exists($file))
        {
            $output =   file_get_contents($file);
            
            if(is_array($array) && ! empty($array))
            {
                foreach ($array as $key => $val)
                {
                    $replace    =   '{'.$key.'}';
                    $output     =   str_replace($replace, $val, $output);
                }
            }
            
            return $output;
        }
    }
}


