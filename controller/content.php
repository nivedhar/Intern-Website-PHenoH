<?php

require_once('../connection.php');
require "../controller.php";

$conn       =   new Connection();
$connection =   $conn->connection();
        
if ($_GET['origLat'] && $_GET['origLng'])
{
    $origLat = filter_input(INPUT_GET, 'origLat', FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION);
    $origLng = filter_input(INPUT_GET, 'origLng', FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION);
}
else
{
    $origLat    =   37.431517;
    $origLng    =   -122.101047;
}
/*Table Insert Query*/
/*INSERT INTO `admin_stores_locations` (`id_location`, `id_store`, `id_storecode`, `name`, `lat`, `lng`, `address`, `territory`, `city`, `state`, `postal`, `phone`, `web`, `hours1`, `hours2`, `hours3`, `is_active`) SELECT `id_location`, `id_store`, `id_storecode`, `name`, `lat`, `lng`, `address`, `territory`, `city`, `state`, `postal`, `phone`, `website`, `hours1`, `hours2`, `hours3`, `is_active` FROM `TABLE 7`*/
date_default_timezone_set('America/Los_Angeles');

$sql    =   $connection->prepare("SELECT * FROM admin_stores_locations sl
                INNER JOIN admin_stores s ON s.id_store = sl.id_store
                WHERE lat BETWEEN  $origLat - DEGREES(0.0053) AND $origLat + DEGREES(0.0053)
                    AND lng BETWEEN $origLng - DEGREES(0.0053) AND $origLng + DEGREES(0.0053)
                    AND is_active = 1
                LIMIT 30");

$result =   $sql->execute() ? 1 : 0;

$locations      =   $sql->fetchAll(PDO::FETCH_ASSOC);

if(empty($locations))
{
    $origLat    =   37.431517;
    $origLng    =   -122.101047;
    
    $sql    =   $connection->prepare("SELECT * FROM admin_stores_locations sl
                INNER JOIN admin_stores s ON s.id_store = sl.id_store
                WHERE lat BETWEEN  $origLat - DEGREES(0.0053) AND $origLat + DEGREES(0.0053)
                    AND lng BETWEEN $origLng - DEGREES(0.0053) AND $origLng + DEGREES(0.0053)
                    AND is_active = 1
                LIMIT 30");

    $result =   $sql->execute() ? 1 : 0;

    $locations      =   $sql->fetchAll(PDO::FETCH_ASSOC);
}

$connection     =   null;
$locations_output = array();

foreach( $locations as $location ){
    array_push( $locations_output, $location );
}

echo json_encode($locations_output);