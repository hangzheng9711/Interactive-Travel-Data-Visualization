function getJsonArray(leixing,jutizhi)
{	
	var data=new Array(); 
	var abnormal_data={"leixing":leixing,"jutizhi":jutizhi};
   var jsonstr_send=JSON.stringify(abnormal_data);//将json对象转换为json字符串 
       $.ajax
		 ({ 
		  type:"POST",
         url:"../php/getLeidatuData.php",
         async:false,
		 data:{'json':jsonstr_send},//发送json字符串
		  error: function(){
          alert("请求超时!");   
         },
         success:function(result){json_receive =eval('(' + result + ')');} //接受json字符串并将json字符串转换为json对象
        }); 
	var count=Object.keys(json_receive).length;

   if(leixing=="所有")
   {
	for(i=0;i<count;i++)
	{
	var value=new Array();
	value.push(json_receive[i].qinzi);
	value.push(json_receive[i].pengyou);
	value.push(json_receive[i].qinglv);
	value.push(json_receive[i].jiating);
	value.push(json_receive[i].duzi);
	var name=json_receive[i].country_name;
	var json={"value":value,"name":name};
	data.push(json);
	}
	return data;
   }
   else if(leixing=="某国家"){
	   for(i=0;i<count;i++)
	{
	var value=new Array();
	value.push(json_receive[i].qinzi);
	value.push(json_receive[i].pengyou);
	value.push(json_receive[i].qinglv);
	value.push(json_receive[i].jiating);
	value.push(json_receive[i].duzi);
	var name=json_receive[i].city_name;
	var json={"value":value,"name":name};
	data.push(json);
	}
	return data;
	   }
   else if(leixing=="某地区"){
	    for(i=0;i<count;i++)
	{
	var value=new Array();
	value.push(json_receive[i].qinzi);
	value.push(json_receive[i].pengyou);
	value.push(json_receive[i].qinglv);
	value.push(json_receive[i].jiating);
	value.push(json_receive[i].duzi);
	var name=json_receive[i].jingdian_name;
	var json={"value":value,"name":name};
	data.push(json);
	}
	return data;
	   }
   else if(leixing=="某景点"){
	   for(i=0;i<count;i++)
	{
	var value=new Array();
	value.push(json_receive[i].qinzi);
	value.push(json_receive[i].pengyou);
	value.push(json_receive[i].qinglv);
	value.push(json_receive[i].jiating);
	value.push(json_receive[i].duzi);
	var name=json_receive[i].jingdian_name;
	var json={"value":value,"name":name};
	data.push(json);
	}
	return data;
	   }
   
}