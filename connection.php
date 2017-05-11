<?php

class Connection
{
    public function connection()
    {
        $servername =   "localhost";
        $dbname     =   "phenoh";
        $username   =   "root";
        $password   =   "phenoh";

        try
        {
            //Creating connection for mysql
            $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);

            // set the PDO error mode to exception
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            
            return $conn;
        }
        catch(PDOException $e)
        {
            return "Connection failed: " . $e->getMessage();
        }
    }
}