(function(){
	var jsonArray=new Array();
	jsonArray=getJsonArray("所有","无");
	var count=Object.keys(jsonArray).length;
	
	var coutryNameArray=new Array();
	for(i=0;i<count;i++)
	{
	coutryNameArray.push(jsonArray[i].name);
	}
	
var myChart = echarts.init(document.getElementById('leidatu'),'dark');

option = {
	backgroundColor: "#044161",
	title: {
        text: '主题',
        top: 10,
        left: 10
    },
	tooltip: {
        trigger: 'item',
        backgroundColor : 'rgba(0,0,250,0.2)'
    },
    legend: {
		 bottom: 10,
		type: 'scroll',
        data: coutryNameArray
    },
    radar: {
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
           }
        },
        indicator: [
           { name: '亲子', max: 1},
           { name: '朋友', max: 1},
           { name: '情侣', max: 1},
           { name: '家庭', max: 1},
           { name: '独自', max: 1},
        ]
    },
    series: [{
        name: 'shuju',
        type: 'radar',
        data : jsonArray
    }]
};

myChart.setOption(option);
})();

function showLeidatu(leixing,name)
{
	var jsonArray=new Array();
	jsonArray=getJsonArray(leixing,name);
	var count=Object.keys(jsonArray).length;
	
	var coutryNameArray=new Array();
	for(i=0;i<count;i++)
	{
	coutryNameArray.push(jsonArray[i].name);
	}
	
var myChart = echarts.init(document.getElementById('leidatu'),'dark');

option = {
	backgroundColor: "#044161",
	title: {
        text: '主题',
        top: 10,
        left: 10
    },
	tooltip: {
        trigger: 'item',
        backgroundColor : 'rgba(0,0,250,0.2)'
    },
    legend: {
		 bottom: 10,
		type: 'scroll',
        data: coutryNameArray
    },
    radar: {
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
           }
        },
        indicator: [
           { name: '亲子', max: 1},
           { name: '朋友', max: 1},
           { name: '情侣', max: 1},
           { name: '家庭', max: 1},
           { name: '独自', max: 1},
        ]
    },
    series: [{
        name: 'shuju',
        type: 'radar',
        data : jsonArray
    }]
};

myChart.setOption(option);
}