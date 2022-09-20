function getdataqipaotu(leixing,jutizhi,shuxing)
{	
	var data=new Array(); 
	var abnormal_data={"leixing":leixing,"jutizhi":jutizhi,"shuxing":shuxing};
   var jsonstr_send=JSON.stringify(abnormal_data);//将json对象转换为json字符串 
       $.ajax
		 ({ 
		  type:"POST",
         url:"../php/getQipaotuData.php",
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
	if(shuxing=="风景区")
	{
	var j=0;
	for(i=0;i<count;i++)
	{
		if(json_receive[i].country_fjq_num==0) ;
		else
		{
       data[j]=new Array(); 
	   data[j].push(json_receive[i].country_fjq_star);
	   data[j].push(json_receive[i].country_fjq_hot);
	   data[j].push(json_receive[i].country_fjq_num);
	   data[j].push(json_receive[i].country_name);
	   j++;
		}
	} 
	return data;
	}
	else if(shuxing=="娱乐")
	{
	var j=0;
	for(i=0;i<count;i++)
	{
		if(json_receive[i].country_yl_num==0) ;
		else
		{
       data[j]=new Array(); 
	   data[j].push(json_receive[i].country_yl_star);
	   data[j].push(json_receive[i].country_yl_hot);
	   data[j].push(json_receive[i].country_yl_num);
	   data[j].push(json_receive[i].country_name);
	   j++;
		}
	} 
	return data;
	}
	else if(shuxing=="购物")
	{
	var j=0;
	for(i=0;i<count;i++)
	{
		if(json_receive[i].country_gw_num==0) ;
		else
		{
       data[j]=new Array(); 
	   data[j].push(json_receive[i].country_gw_star);
	   data[j].push(json_receive[i].country_gw_hot);
	   data[j].push(json_receive[i].country_gw_num);
	   data[j].push(json_receive[i].country_name);
	   j++;
		}
	} 
	return data;
	}
   }
   
   else if(leixing=="某国家")
   {
	if(shuxing=="风景区")
	{
	var j=0;
	for(i=0;i<count;i++)
	{
		if(json_receive[i].city_fjq_num==0) ;
		else
		{
       data[j]=new Array(); 
	   data[j].push(json_receive[i].city_fjq_star);
	   data[j].push(json_receive[i].city_fjq_hot);
	   data[j].push(json_receive[i].city_fjq_num);
	   data[j].push(json_receive[i].city_name);
	   j++;
		}
	} 
	return data;
	}
	else if(shuxing=="娱乐")
	{
	var j=0;
	for(i=0;i<count;i++)
	{
		if(json_receive[i].city_yl_num==0) ;
		else
		{
       data[j]=new Array(); 
	   data[j].push(json_receive[i].city_yl_star);
	   data[j].push(json_receive[i].city_yl_hot);
	   data[j].push(json_receive[i].city_yl_num);
	   data[j].push(json_receive[i].city_name);
	   j++;
		}
	} 
	return data;
	}
	else if(shuxing=="购物")
	{
	var j=0;
	for(i=0;i<count;i++)
	{
		if(json_receive[i].city_gw_num==0) ;
		else
		{
       data[j]=new Array(); 
	   data[j].push(json_receive[i].city_gw_star);
	   data[j].push(json_receive[i].city_gw_hot);
	   data[j].push(json_receive[i].city_gw_num);
	   data[j].push(json_receive[i].city_name);
	   j++;
		}
	} 
	return data;
	}
   }
   
  else if(leixing=="某地区")
   {
	if(shuxing=="风景区")
	{
	var j=0;
	for(i=0;i<count;i++)
	{
		if(json_receive[i].jingdian_kind=="风景区")
		{
       data[j]=new Array(); 
	   data[j].push(json_receive[i].jingdian_star);
	   data[j].push(json_receive[i].jingdian_hot);
	   data[j].push(1);
	   data[j].push(json_receive[i].jingdian_name);
	   j++;
		}
	} 
	return data;
	}
	else if(shuxing=="娱乐")
	{
	var j=0;
	for(i=0;i<count;i++)
	{
		if(json_receive[i].jingdian_kind=="娱乐")
		{
       data[j]=new Array(); 
	   data[j].push(json_receive[i].jingdian_star);
	   data[j].push(json_receive[i].jingdian_hot);
	   data[j].push(1);
	   data[j].push(json_receive[i].jingdian_name);
	   j++;
		}
	} 
	return data;
	}
	else if(shuxing=="购物")
	{
	var j=0;
	for(i=0;i<count;i++)
	{
		if(json_receive[i].jingdian_kind=="购物")
		{
       data[j]=new Array(); 
	   data[j].push(json_receive[i].jingdian_star);
	   data[j].push(json_receive[i].jingdian_hot);
	   data[j].push(1);
	   data[j].push(json_receive[i].jingdian_name);
	   j++;
		}
	} 
	return data;
	}
   }
   
   else if(leixing=="某景点")
   {
	if(shuxing=="风景区")
	{
		if(json_receive[0].jingdian_kind=="风景区")
	{
       data[0]=new Array(); 
	   data[0].push(json_receive[0].jingdian_star);
	   data[0].push(json_receive[0].jingdian_hot);
	   data[0].push(1);
	   data[0].push(json_receive[0].jingdian_name);
	} 
	return data;
	}
	else if(shuxing=="娱乐")
	{
	if(json_receive[0].jingdian_kind=="娱乐")
	{
       data[0]=new Array(); 
	   data[0].push(json_receive[0].jingdian_star);
	   data[0].push(json_receive[0].jingdian_hot);
	   data[0].push(1);
	   data[0].push(json_receive[0].jingdian_name);
	} 
	return data;
	}
	else if(shuxing=="购物")
	{
	if(json_receive[0].jingdian_kind=="购物")
	{
       data[0]=new Array(); 
	   data[0].push(json_receive[0].jingdian_star);
	   data[0].push(json_receive[0].jingdian_hot);
	   data[0].push(1);
	   data[0].push(json_receive[0].jingdian_name);
	} 
	return data;
	}
   }
   
}