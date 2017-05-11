<?php
require_once 'ajax.php';
require_once 'adminajax.php';

if(isset($_POST['form']))
{
    $form   =   new Ajax();
    $result =   $form->saveForm($_POST['form']);
}
else if(isset($_POST['user_name']) && isset($_POST['password']))
{
    $form   =   new Adminajax();
    $result =   $form->athenticate($_POST['user_name'], $_POST['password']);
}
else if(isset($_POST['fact_form']))
{
    $form   =   new Adminajax();
    $result =   $form->saveFacts($_POST['fact_form']);
}
else if(isset($_POST['map']))
{
    $form   =   new Ajax();
    $result =   $form->getStores();
}
else
{
    $result =   null;
}

echo $result;
