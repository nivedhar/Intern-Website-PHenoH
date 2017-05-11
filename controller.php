<?php

class Controller
{
    public static $LANG;
    public static $messages;
    
    public function __construct()
    {
        self::$LANG   =   substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);

        if(empty(self::$LANG))
        {
            self::$LANG   =   'en';
        }
        
        switch (self::$LANG)
        {
            case "fr":
                require_once("config/locale/fr.php");
                break;
            case "en":
                require_once("config/locale/en.php");
                break;        
            default:
                require_once("config/locale/en.php");
                break;
        }
        
        $locale_conn        =   new En();
        self::$messages     =   $locale_conn->initLocale();
    }
}