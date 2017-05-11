<?php

require_once('connection.php');
require_once('controller/admin.php');
require_once('controller/adminpanel.php');

$LANG   =   substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);

if(empty($LANG))
{
    $LANG   =   'en';
}

switch ($LANG)
{
    case 'fr':
        require_once('config/locale/fr.php');
        break;
    case 'en':
        require_once('config/locale/en.php');
        break;        
    default:
        require_once('config/locale/en.php');
        break;
}

$locale_conn        =   new En();
$messages           =   $locale_conn->initLocale();

if(isset($_GET['controller']) && $_GET['controller'] === 'admin')
{
    $controller =   $_GET['controller'];
    
    $controller =   new Admin();
    $controller->index();
}
else if(isset($_GET['controller']) && $_GET['controller'] === 'adminpanel')
{
    $controller =   $_GET['controller'];
    
    $controller =   new AdminPanel();
    $controller->index();
}
else if (isset($_GET['controller']) && isset($_GET['action']))
{
    $controller =   $_GET['controller'];
    $action     =   $_GET['action'];
    
    require_once('views/layout.html');
}
else
{
    $controller =   'pages';
    $action     =   'index';
    
    require_once('views/layout.html');
}