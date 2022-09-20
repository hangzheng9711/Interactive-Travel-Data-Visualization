function getdataHot(state,name){
    var data = [];
    var abnormal_data={"state":state,"name":name}; 
    var jsonstr_send=JSON.stringify(abnormal_data);//将json对象转换为json字符串 
       $.ajax
		 ({ 
		  type:"POST",
         url:"../php/getdataHot.php",
         async:false,
		 data:{'json':jsonstr_send},//发送json字符串
		  error: function(){
          alert("请求超时!");   
         },
         success:function(result){json_receive =eval('(' + result + ')');} //接受json字符串并将json字符串转换为json对象
        }); 
	var count=Object.keys(json_receive).length;

    switch(state){
        case 0://所有国家
			 data[0] = new Array();
            data[0].push(json_receive[0].country_name);
            data[0].push(json_receive[0].country_gw_hot);
            data[0].push(json_receive[0].country_yl_hot);
            data[0].push(json_receive[0].country_fjq_hot);
        for(i=1;i<=count;i++){
            data[i] = new Array();
            data[i].push(json_receive[i-1].country_name);
            data[i].push(json_receive[i-1].country_gw_hot);
            data[i].push(json_receive[i-1].country_yl_hot);
            data[i].push(json_receive[i-1].country_fjq_hot);
        }

        return data;

        case 1://某个国家
		
		
        data[0] = new Array();
            data[0].push(json_receive[0].city_name);
            data[0].push(json_receive[0].city_gw_hot);
            data[0].push(json_receive[0].city_yl_hot);
            data[0].push(json_receive[0].city_fjq_hot);
        for(i=1;i<=count;i++){
            data[i] = new Array();
            data[i].push(json_receive[i-1].city_name);
            data[i].push(json_receive[i-1].city_gw_hot);
            data[i].push(json_receive[i-1].city_yl_hot);
            data[i].push(json_receive[i-1].city_fjq_hot);
        }
        return data;

        case 2://某个地区
        data[0] = new Array();
            data[0].push(json_receive[0].jingdian_name);
            data[0].push(json_receive[0].jingdian_hot);
            data[0].push(json_receive[0].jingdian_hot);
            data[0].push(json_receive[0].jingdian_hot);
        for(i=1;i<=count;i++){
            data[i] = new Array();
			if(json_receive[i-1].jingdian_kind=="娱乐")
			{
            data[i].push(json_receive[i-1].jingdian_name);
            data[i].push(0);
            data[i].push(json_receive[i-1].jingdian_hot);
            data[i].push(0);
			}
			else if(json_receive[i-1].jingdian_kind=="购物")
			{
            data[i].push(json_receive[i-1].jingdian_name);
            data[i].push(json_receive[i-1].jingdian_hot);
            data[i].push(0);
            data[i].push(0);
			}
			else if(json_receive[i-1].jingdian_kind=="风景区")
			{
            data[i].push(json_receive[i-1].jingdian_name);
            data[i].push(0);
            data[i].push(0);
            data[i].push(json_receive[i-1].jingdian_hot);
			}
        }

        return data;

    }


}