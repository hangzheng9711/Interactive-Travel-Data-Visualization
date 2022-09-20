<?php
if ($_POST['json'])//接受json字符串
{
	
	$jsonstr=(array)(json_decode($_POST['json']));//将json字符串解析为php数组
	
	$con = mysql_connect("localhost", "root", "zh43907019");
	if (!$con)
	{
		die('Could not connect: ' . mysql_error());
	}
	mysql_select_db("travel", $con);//连接数据库
	
	$shuxing=$jsonstr['shuxing'];
	$leixing=$jsonstr['leixing'];
	$jutizhi=$jsonstr['jutizhi'];

	if($leixing=="所有")
	{
	$sql="SELECT * FROM country";
	$result = mysql_query($sql);
	while($row = mysql_fetch_array($result))
	{
		$travel_data[]=$row;
	}
	}
	else if($leixing=="某国家")
	{
	$sql="SELECT * FROM city where city_country_name='".$jutizhi."' ";
	$result = mysql_query($sql);
	while($row = mysql_fetch_array($result))
	{
		$travel_data[]=$row;
	}
	}
	else if($leixing=="某地区")
	{
	$sql="SELECT * FROM jingdian where jingdian_city_name='".$jutizhi."' ";
	$result = mysql_query($sql);
	while($row = mysql_fetch_array($result))
	{
		$travel_data[]=$row;
	}
	}
	else if($leixing=="某景点")
	{
	$sql="SELECT * FROM jingdian where jingdian_name='".$jutizhi."' ";
	$result = mysql_query($sql);
	while($row = mysql_fetch_array($result))
	{
		$travel_data[]=$row;
	}
	}
	
	$result = json_encode($travel_data); //将php数组封装为json字符串
	echo $result;//发送json字符串
	
	mysql_close($con);

}

?>
