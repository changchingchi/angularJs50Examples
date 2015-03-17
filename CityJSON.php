<?php
header('Content-Type: application/json');

// $data = array('client_token' => $clientToken );
$jsonArray=array();
$data = array();
$namelist = ['mary','chi',];
$countrylist = ['USA', 'Taiwan'];
$flaglist = [
'http://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg'
,'http://upload.wikimedia.org/wikipedia/commons/7/72/Flag_of_the_Republic_of_China.svg'];

for($i = 0; $i<count($namelist);$i++){
$data['Name']= $namelist[$i];
$data['City']= $countrylist[$i];
$data['Flag']= $flaglist[$i];
array_push($jsonArray, $data);
}

echo(json_encode($jsonArray));

?>
