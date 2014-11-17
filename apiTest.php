<?php

if(!isset($_GET['p1']) || !in_array($_GET['p1'], array(1,2))) {
	$success = false;
} else {
	$success = true;
}

$a = array("a"=>"Dog","b"=>"Cat","c"=>"Horse");

$data = array("success" => $success , 'data' => $a);	

$result = json_encode($data);


echo $result;