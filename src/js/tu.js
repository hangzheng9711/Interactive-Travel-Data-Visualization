var flag=0;
(function()
{
var bmapChart = echarts.init(document.getElementById('ditu'));
var myData=getTuData("所有");

var option = {
	title: {
        text: '景点数量地图',
		textStyle: {
            color: '#fff'
        }
    },
	    tooltip : {
			formatter: function (obj) {
			  var name = obj.name;
            var value = obj.value;
            return  '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                + '景点数量'+'</div>'+
			name +'：' + value[2];
        },
        trigger: 'item'
    },
		bmap: {
      	center: [2.370895,46.83613], // 中心位置坐标
      	zoom: 1, // 地图缩放比例
      	roam: true, // 开启用户缩放
		mapStyle: {
           styleJson: [
                    {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": {
                            "color": "#044161"
                        }
                    },
                    {
                        "featureType": "land",
                        "elementType": "all",
                        "stylers": {
                            "color": "#004981"
                        }
                    },
                    {
                        "featureType": "boundary",
                        "elementType": "geometry",
                        "stylers": {
                            "color": "#064f85"
                        }
                    },
                    {
                        "featureType": "railway",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "highway",
                        "elementType": "geometry",
                        "stylers": {
                            "color": "#004981"
                        }
                    },
                    {
                        "featureType": "highway",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#005b96",
                            "lightness": 1
                        }
                    },
                    {
                        "featureType": "highway",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "arterial",
                        "elementType": "geometry",
                        "stylers": {
                            "color": "#004981"
                        }
                    },
                    {
                        "featureType": "arterial",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#00508b"
                        }
                    },
                    {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "green",
                        "elementType": "all",
                        "stylers": {
                            "color": "#056197",
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "subway",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "manmade",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "local",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "arterial",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "boundary",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#029fd4"
                        }
                    },
                    {
                        "featureType": "building",
                        "elementType": "all",
                        "stylers": {
                            "color": "#1a5787"
                        }
                    },
                    {
                        "featureType": "label",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    }
            ]
        }
  	},
  	visualMap: {	// 视觉映射组件
	   top: '43%',
		type: 'continuous',
		min: 0,
		max: 400,
		calculable: true,
		inRange: {
             	color: ['#eac736','#d94e5d']
          },
		textStyle: {
			color: '#fff'
		}
     	},
	series: [
		{
			name: '热度',
			type: 'scatter',
			symbolSize:20,
			coordinateSystem: 'bmap', // 坐标系使用bmap

			data: myData
		}
	],
	toolbox: {  
        feature: {  
            myTool1: {  
                show: true,  
                title: '后退', 
                icon: 'image://../left_round.png',  
                onclick: function (){ 					  
                    show("所有",[2.370895,46.83613,128]);
					  showQipaotu("所有","无");
					  receiveDataOfMap(0,null)
					  showLeidatu("所有","无");
						flag=0; 
                }  
            }

        }  
    }  
}



bmapChart.setOption(option);

bmapChart.on('click',function(params){
	if(flag==0) 
	{show(params.name,params.value);
	showQipaotu("某国家",params.name);
	receiveDataOfMap(1,params.name)
	showLeidatu("某国家",params.name);flag=1;}
	else{
	showQipaotu("某地区",params.name);
	receiveDataOfMap(2,params.name)
	showLeidatu("某地区",params.name);}
	/*bmapChart.setOption({
		bmap: {
      	center: [params.value[0],params.value[1]], // 中心位置坐标
      	zoom: 10, // 地图缩放比例
      	roam: true, 
		}// 开启用户缩放
		});*/
});
})();
function show(name,value)
{
	var bmapChart = echarts.init(document.getElementById('ditu'));
	
	if(name=="所有")
	{
var myData=getTuData("所有");
var suofangbili=1;
var centerx=value[0];
var centery=value[1];
var max_data = 400;
	}
	else{
		var myData=getTuData(name); 
		
		var max_data = 0;
		var len = myData.length;
		
	for (var i = 0; i < len; i++)
	{
		var a=myData[i].value[2];
		if (a > max_data)
		{
		max_data = a;
		}
	}
		var suofangbili=4;
		var centerx=value[0];
		var centery=value[1];}
	
	var option = {
	    tooltip : {
			formatter: function (obj) {
			  var name = obj.name;
            var value = obj.value;
            return  '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                + '景点数量'+'</div>'+
			name +'：' + value[2];
        },
        trigger: 'item'
    },
		bmap: {
      	center: [centerx,centery], // 中心位置坐标
      	zoom: suofangbili, // 地图缩放比例
      	roam: true, // 开启用户缩放
		mapStyle: {
            styleJson: [
                    {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": {
                            "color": "#044161"
                        }
                    },
                    {
                        "featureType": "land",
                        "elementType": "all",
                        "stylers": {
                            "color": "#004981"
                        }
                    },
                    {
                        "featureType": "boundary",
                        "elementType": "geometry",
                        "stylers": {
                            "color": "#064f85"
                        }
                    },
                    {
                        "featureType": "railway",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "highway",
                        "elementType": "geometry",
                        "stylers": {
                            "color": "#004981"
                        }
                    },
                    {
                        "featureType": "highway",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#005b96",
                            "lightness": 1
                        }
                    },
                    {
                        "featureType": "highway",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "arterial",
                        "elementType": "geometry",
                        "stylers": {
                            "color": "#004981"
                        }
                    },
                    {
                        "featureType": "arterial",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#00508b"
                        }
                    },
                    {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "green",
                        "elementType": "all",
                        "stylers": {
                            "color": "#056197",
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "subway",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "manmade",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "local",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "arterial",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "boundary",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#029fd4"
                        }
                    },
                    {
                        "featureType": "building",
                        "elementType": "all",
                        "stylers": {
                            "color": "#1a5787"
                        }
                    },
                    {
                        "featureType": "label",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    }
            ]
        }
  	},
  	visualMap: {	// 视觉映射组件
		   top: '43%',
		type: 'continuous',
		min: 0,
		max: max_data,
		calculable: true,
		inRange: {
             	color: ['#eac736','#d94e5d']
          },
		textStyle: {
			color: '#fff'
		}
     	},
	series: [
		{
			name: '热度',
			type: 'scatter',
			symbolSize:20,
			coordinateSystem: 'bmap', // 坐标系使用bmap

			data: myData
		}
	],
	toolbox: {  
        feature: {  
            myTool1: {  
                show: true,  
                title: '后退', 
                icon: 'image://../left_round.png',  
                onclick: function (){  
                    show("所有",[2.370895,46.83613,128]);
					  showQipaotu("所有","无");
					  receiveDataOfMap(0,null)
					  showLeidatu("所有","无");
					  flag=0;
                }  
            }

        }  
    }  
}

bmapChart.setOption(option);

bmapChart.on('click',function(params){
	if(flag==0) 
	{show(params.name,params.value);
	showQipaotu("某国家",params.name);
	receiveDataOfMap(1,params.name)
	showLeidatu("某国家",params.name);flag=1;}
	else{
	showQipaotu("某地区",params.name);
	receiveDataOfMap(2,params.name)
	showLeidatu("某地区",params.name);}
	/*bmapChart.setOption({
		bmap: {
      	center: params.value, // 中心位置坐标
      	zoom: 10, // 地图缩放比例
      	roam: true, 
		}// 开启用户缩放
		});*/
});
}