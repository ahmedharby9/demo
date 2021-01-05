<?php
////open
//$jsonString = file_get_contents('Questions.json');
//$data = json_decode($jsonString, true);
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

//close
$newJsonString = json_encode($request);
file_put_contents('scores.json', $newJsonString);
?>