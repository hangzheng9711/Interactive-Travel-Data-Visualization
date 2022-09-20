<?php
if($_POST['json'])//接受json字符串
{
    $jsonstr =(array)(json_decode($_POST['json']));
    $con = mysql_connect("localhost", "root", "zh43907019");
	if (!$con)
	{
		die('Could not connect: ' . mysql_error());
	}
    mysql_select_db("travel", $con);//连接数据库
    
    $state = $jsonstr['state'];
    $name = $jsonstr['name'];

    switch($state)
    {
        case 0:
        $sql = "SELECT country_name,country_gw_hot,
        country_yl_hot,country_fjq_hot from country order by country_gw_hot+country_yl_hot+country_fjq_hot desc limit 0,10";
        $result = mysql_query($sql);
        while($row = mysql_fetch_array($result))
        {
            $travel_data[] = $row;
        }
        break;

        case 1 :
        $sql = "SELECT city_name,city_gw_hot,
        city_yl_hot,city_fjq_hot from city where city_country_name ='".$name."'  order by city_gw_hot+city_yl_hot+city_fjq_hot desc limit 0,10";
        $result = mysql_query($sql);
        while($row = mysql_fetch_array($result))
        {
            $travel_data[] = $row;
        }
        break;
        //</case:1>
        case 2:
        $sql = "SELECT jingdian_name,jingdian_hot,
        jingdian_kind from jingdian where jingdian_city_name ='".$name."' order by jingdian_hot desc limit 0,30";
        $result = mysql_query($sql);
        while($row = mysql_fetch_array($result))
        {
            $travel_data[] = $row;
        }
        break;
        
    }
    $result = json_encode($travel_data);
    echo $result;//发送字符串

    mysql_close($con);
}
?>