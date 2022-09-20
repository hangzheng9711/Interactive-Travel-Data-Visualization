var leixing_qj="所有";
var jutizhi_qj="无";
(function(){
var myChart = echarts.init(document.getElementById('qipaotu'),'dark');
datafjq=getdataqipaotu("所有","无","风景区");
datagw=getdataqipaotu("所有","无","购物");
datayl=getdataqipaotu("所有","无","娱乐");
var datafjq1=datafjq;
var datagw1=datagw;
var datayl1=datayl;

var min_star = 9999999999;
var max_star = 0;
var min_hot = 9999999999;
var max_hot = 0;
var min_num = 9999999999;
var max_num = 0;

var len1 = datafjq.length;
var len2 = datagw.length;
var len3 = datayl.length;
 
if(len1>0)
{
	for (var i = 0; i < len1; i++)
	{
		var a=parseFloat(datafjq[i][0]);
		var b=parseInt(datafjq[i][2]);
		var c= parseInt(datafjq[i][1]);
		if (a < min_star)
		{
		min_star = a;
		}
		if (b < min_num)
		{
		min_num = b;
		}
		if (c < min_hot)
		{
		min_hot = c;
		}
		if (a > max_star)
		{
		max_star = a;
		}
		if (b > max_num)
		{
		max_num = b;
		}
		if (c > max_hot)
		{
		max_hot = c;
		}
	}
}
if(len2>0)
{
	for (var i = 0; i < len2; i++)
	{
		var a=parseFloat(datagw[i][0]);
		var b=parseInt(datagw[i][2]);
		var c= parseInt(datagw[i][1]);
		if (a < min_star)
		{
		min_star = a;
		}
		if (b < min_num)
		{
		min_num = b;
		}
		if (c < min_hot)
		{
		min_hot = c;
		}
		if (a > max_star)
		{
		max_star = a;
		}
		if (b > max_num)
		{
		max_num = b;
		}
		if (c > max_hot)
		{
		max_hot = c;
		}
	}
}
if(len3>0)
{
	for (var i = 0; i < len3; i++)
	{
		var a=parseFloat(datayl[i][0]);
		var b=parseInt(datayl[i][2]);
		var c= parseInt(datayl[i][1]);
		if (a < min_star)
		{
		min_star = a;
		}
		if (b < min_num)
		{
		min_num = b;
		}
		if (c < min_hot)
		{
		min_hot = c;
		}
		if (a > max_star)
		{
		max_star = a;
		}
		if (b > max_num)
		{
		max_num = b;
		}
		if (c > max_hot)
		{
		max_hot = c;
		}
	}
}

if(min_star==max_star) 
{min_star=min_star-2;max_star=max_star+2;}
if(min_hot==max_hot) 
{max_hot=max_hot*2;}
var schema = [
    {name: 'num', index: 0, text: '景点数量'},
    {name: 'star', index: 1, text: '评分'},
    {name: 'hot', index: 2, text: '热度'},
];


var itemStyle = {
    normal: {
        opacity: 0.8,
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
    }
};

option = {
		title: {
        text: '属性',
    },
    backgroundColor: "#044161",
    color: [
        '#dd4444', '#fec42c', '#80F1BE'
    ],
    legend: {
        y: 'top',
        data: ['风景区', '购物', '娱乐'],
        textStyle: {
            color: '#fff',
            fontSize: 16
        }
    },
    grid: {
        x: '12%',
        x2: '18%',
        y: '18%',
        y2: '10%'
    },
    tooltip: {
        padding: 10,
        backgroundColor: '#222',
        borderColor: '#777',
        borderWidth: 1,
        formatter: function (obj) {
            var value = obj.value;
            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                +value[3] 
                + '</div>'
                +
                '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                +obj.seriesName
                + '</div>'
                + schema[0].text + '：' + value[2] + '<br>'
                + schema[1].text + '：' + value[0] + '<br>'
                + schema[2].text + '：' + value[1] + '<br>'
        }
    },
    xAxis: {
        type: 'value',
        name: '评分',
        nameGap: 16,
        nameTextStyle: {
            color: '#fff',
            fontSize: 14
        },
		min:min_star,
		max:max_star,
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#eee'
            }
        }
    },
    yAxis: {
        type: 'value',
        name: '热度',
		 min:0,
		 max:max_hot,
        nameGap: 20,
        nameTextStyle: {
            color: '#fff',
            fontSize: 16
        },
        axisLine: {
            lineStyle: {
                color: '#eee'
            }
        },
        splitLine: {
            show: false
        }
    },
    visualMap: [
        {
            left: 'right',
            top: '30%',
            dimension: 2,
			  min:0,
			  max:max_num,
            itemWidth: 30,
            itemHeight: 120,
            calculable: true,
            precision: 0.1,
            text: ['圆形大小：数量'],
            textGap: 30,
            textStyle: {
                color: '#fff'
            },
            inRange: {
                symbolSize: [10, 70]
            },
            outOfRange: {
                symbolSize: [10, 70],
                color: ['rgba(255,255,255,.2)']
            },
            controller: {
                inRange: {
                    color: ['#c23531']
                },
                outOfRange: {
                    color: ['#444']
                }
            }
        }
    ],
    series: [
        {
            name: '购物',
            type: 'scatter',
            itemStyle: itemStyle,
            data: datagw
        },
        {
            name: '娱乐',
            type: 'scatter',
            itemStyle: itemStyle,
            data: datayl
        },
        {
            name: '风景区',
            type: 'scatter',
            itemStyle: itemStyle,
            data: datafjq
        }
    ],
	
		toolbox: {  
        feature: {  
            myTool1: {  
                show: true,  
                title: '后退', 
                icon: 'image://../left_round.png',  
                onclick: function (){  
                   showQipaotu(leixing_qj,jutizhi_qj);
                }  
            }

        }  
    } 
	
};

myChart.setOption(option);

myChart.on('click', function (parmas) {
var len1 = datafjq1.length;
var len2 = datagw1.length;
var len3 = datayl1.length;
var flag=0;

for(i=0;i<len1;i++)
{if(parmas.data[3]==datafjq1[i][3]){flag=1;datafjq1.splice(i,1);break;}
}
if(flag==0)
{
for(i=0;i<len2;i++)
{if(parmas.data[3]==datagw1[i][3]){flag=1;datagw1.splice(i,1);break;}
}
}
if(flag==0)
{
for(i=0;i<len3;i++)
{if(parmas.data[3]==datayl1[i][3]){flag=1;datayl1.splice(i,1);break;}
}
}
var min_star1 = 9999999999;
var max_star1 = 0;
var min_hot1 = 9999999999;
var max_hot1 = 0;
var min_num1 = 9999999999;
var max_num1 = 0;
 
len1 = datafjq1.length;
len2 = datagw1.length;
len3 = datayl1.length;
 
if(len1>0)
{
	for (var i = 0; i < len1; i++)
	{
		var a=parseFloat(datafjq1[i][0]);
		var b=parseInt(datafjq1[i][2]);
		var c= parseInt(datafjq1[i][1]);
		if (a < min_star1)
		{
		min_star1 = a;
		}
		if (b < min_num1)
		{
		min_num1 = b;
		}
		if (c < min_hot1)
		{
		min_hot1 = c;
		}
		if (a > max_star1)
		{
		max_star1 = a;
		}
		if (b > max_num1)
		{
		max_num1 = b;
		}
		if (c > max_hot1)
		{
		max_hot1 = c;
		}
	}
}
if(len2>0)
{
	for (var i = 0; i < len2; i++)
	{
		var a=parseFloat(datagw1[i][0]);
		var b=parseInt(datagw1[i][2]);
		var c= parseInt(datagw1[i][1]);
		if (a < min_star1)
		{
		min_star1 = a;
		}
		if (b < min_num1)
		{
		min_num1 = b;
		}
		if (c < min_hot1)
		{
		min_hot1 = c;
		}
		if (a > max_star1)
		{
		max_star1 = a;
		}
		if (b > max_num1)
		{
		max_num1 = b;
		}
		if (c > max_hot1)
		{
		max_hot1 = c;
		}
	}
}
if(len3>0)
{
	for (var i = 0; i < len3; i++)
	{
		var a=parseFloat(datayl1[i][0]);
		var b=parseInt(datayl1[i][2]);
		var c= parseInt(datayl1[i][1]);
		if (a < min_star1)
		{
		min_star1 = a;
		}
		if (b < min_num1)
		{
		min_num1 = b;
		}
		if (c < min_hot1)
		{
		min_hot1 = c;
		}
		if (a > max_star1)
		{
		max_star1 = a;
		}
		if (b > max_num1)
		{
		max_num1 = b;
		}
		if (c > max_hot1)
		{
		max_hot1 = c;
		}
	}
}

if(min_star1==max_star1) 
{min_star1=min_star1-2;max_star1=max_star1+2;}
if(min_hot1==max_hot1)
{max_hot1=2*max_hot1;}

      myChart.setOption({
		  
		  xAxis: {
        type: 'value',
        name: '评分',
        nameGap: 16,
        nameTextStyle: {
            color: '#fff',
            fontSize: 14
        },
		min:min_star1,
		max:max_star1,
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#eee'
            }
        }
    },
    yAxis: {
        type: 'value',
        name: '热度',
		 min:0,
		 max:max_hot1,
        nameGap: 20,
        nameTextStyle: {
            color: '#fff',
            fontSize: 16
        },
        axisLine: {
            lineStyle: {
                color: '#eee'
            }
        },
        splitLine: {
            show: false
        }
    },
    visualMap: [
        {
            left: 'right',
            top: '30%',
            dimension: 2,
			  min:0,
			  max:max_num1,
            itemWidth: 30,
            itemHeight: 120,
            calculable: true,
            precision: 0.1,
            text: ['圆形大小：数量'],
            textGap: 30,
            textStyle: {
                color: '#fff'
            },
            inRange: {
                symbolSize: [10, 70]
            },
            outOfRange: {
                symbolSize: [10, 70],
                color: ['rgba(255,255,255,.2)']
            },
            controller: {
                inRange: {
                    color: ['#c23531']
                },
                outOfRange: {
                    color: ['#444']
                }
            }
        }
    ],
		  series: [
        {
            name: '购物',
            type: 'scatter',
            itemStyle: itemStyle,
            data: datagw1
        },
        {
            name: '娱乐',
            type: 'scatter',
            itemStyle: itemStyle,
            data: datayl1
        },
        {
            name: '风景区',
            type: 'scatter',
            itemStyle: itemStyle,
            data: datafjq1
        }
    ]

		  });
    });
})();




function showQipaotu(leixing,jutizhi)
{
	leixing_qj=leixing;
	jutizhi_qj=jutizhi;
	var myChart = echarts.init(document.getElementById('qipaotu'),'dark');
datafjq=getdataqipaotu(leixing,jutizhi,"风景区");
datagw=getdataqipaotu(leixing,jutizhi,"购物");
datayl=getdataqipaotu(leixing,jutizhi,"娱乐");
var datafjq1=datafjq;
var datagw1=datagw;
var datayl1=datayl;

var min_star = 9999999999;
var max_star = 0;
var min_hot = 9999999999;
var max_hot = 0;
var min_num = 9999999999;
var max_num = 0;

var len1 = datafjq.length;
var len2 = datagw.length;
var len3 = datayl.length;
 
if(len1>0)
{
	for (var i = 0; i < len1; i++)
	{
		var a=parseFloat(datafjq[i][0]);
		var b=parseInt(datafjq[i][2]);
		var c= parseInt(datafjq[i][1]);
		if (a < min_star)
		{
		min_star = a;
		}
		if (b < min_num)
		{
		min_num = b;
		}
		if (c < min_hot)
		{
		min_hot = c;
		}
		if (a > max_star)
		{
		max_star = a;
		}
		if (b > max_num)
		{
		max_num = b;
		}
		if (c > max_hot)
		{
		max_hot = c;
		}
	}
}
if(len2>0)
{
	for (var i = 0; i < len2; i++)
	{
		var a=parseFloat(datagw[i][0]);
		var b=parseInt(datagw[i][2]);
		var c= parseInt(datagw[i][1]);
		if (a < min_star)
		{
		min_star = a;
		}
		if (b < min_num)
		{
		min_num = b;
		}
		if (c < min_hot)
		{
		min_hot = c;
		}
		if (a > max_star)
		{
		max_star = a;
		}
		if (b > max_num)
		{
		max_num = b;
		}
		if (c > max_hot)
		{
		max_hot = c;
		}
	}
}
if(len3>0)
{
	for (var i = 0; i < len3; i++)
	{
		var a=parseFloat(datayl[i][0]);
		var b=parseInt(datayl[i][2]);
		var c= parseInt(datayl[i][1]);
		if (a < min_star)
		{
		min_star = a;
		}
		if (b < min_num)
		{
		min_num = b;
		}
		if (c < min_hot)
		{
		min_hot = c;
		}
		if (a > max_star)
		{
		max_star = a;
		}
		if (b > max_num)
		{
		max_num = b;
		}
		if (c > max_hot)
		{
		max_hot = c;
		}
	}
}

if(min_star==max_star) 
{min_star=min_star-2;max_star=max_star+2;}
if(min_hot==max_hot) 
{max_hot=max_hot*2;}

var schema = [
    {name: 'num', index: 0, text: '景点数量'},
    {name: 'star', index: 1, text: '评分'},
    {name: 'hot', index: 2, text: '热度'},
];


var itemStyle = {
    normal: {
        opacity: 0.8,
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
    }
};

option = {
    backgroundColor: "#044161",
	title: {
        text: '属性',
    },
    color: [
        '#dd4444', '#fec42c', '#80F1BE'
    ],
    legend: {
        y: 'top',
        data: ['风景区', '购物', '娱乐'],
        textStyle: {
            color: '#fff',
            fontSize: 16
        }
    },
    grid: {
        x: '12%',
        x2: '18%',
        y: '18%',
        y2: '10%'
    },
    tooltip: {
        padding: 10,
        backgroundColor: '#222',
        borderColor: '#777',
        borderWidth: 1,
        formatter: function (obj) {
            var value = obj.value;
            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                +value[3] 
                + '</div>'
                +
                '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                +obj.seriesName
                + '</div>'
                + schema[0].text + '：' + value[2] + '<br>'
                + schema[1].text + '：' + value[0] + '<br>'
                + schema[2].text + '：' + value[1] + '<br>'
        }
    },
    xAxis: {
        type: 'value',
        name: '评分',
        nameGap: 16,
        nameTextStyle: {
            color: '#fff',
            fontSize: 14
        },
		min:min_star,
		max:max_star,
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#eee'
            }
        }
    },
    yAxis: {
        type: 'value',
        name: '热度',
		 min:0,
		 max:max_hot,
        nameGap: 20,
        nameTextStyle: {
            color: '#fff',
            fontSize: 16
        },
        axisLine: {
            lineStyle: {
                color: '#eee'
            }
        },
        splitLine: {
            show: false
        }
    },
    visualMap: [
        {
            left: 'right',
            top: '30%',
            dimension: 2,
			  min:0,
			  max:max_num,
            itemWidth: 30,
            itemHeight: 120,
            calculable: true,
            precision: 0.1,
            text: ['圆形大小：数量'],
            textGap: 30,
            textStyle: {
                color: '#fff'
            },
            inRange: {
                symbolSize: [10, 70]
            },
            outOfRange: {
                symbolSize: [10, 70],
                color: ['rgba(255,255,255,.2)']
            },
            controller: {
                inRange: {
                    color: ['#c23531']
                },
                outOfRange: {
                    color: ['#444']
                }
            }
        }
    ],
    series: [
        {
            name: '购物',
            type: 'scatter',
            itemStyle: itemStyle,
            data: datagw
        },
        {
            name: '娱乐',
            type: 'scatter',
            itemStyle: itemStyle,
            data: datayl
        },
        {
            name: '风景区',
            type: 'scatter',
            itemStyle: itemStyle,
            data: datafjq
        }
    ],
	
		toolbox: {  
        feature: {  
            myTool1: {  
                show: true,  
                title: '后退',  
                icon: 'image://../left_round.png',  
                onclick: function (){  
                   showQipaotu(leixing_qj,jutizhi_qj);
                }  
            }

        }  
    } 
	
};

myChart.setOption(option);

myChart.on('click', function (parmas) {
var len1 = datafjq1.length;
var len2 = datagw1.length;
var len3 = datayl1.length;
var flag=0;

for(i=0;i<len1;i++)
{if(parmas.data[3]==datafjq1[i][3]){flag=1;datafjq1.splice(i,1);break;}
}
if(flag==0)
{
for(i=0;i<len2;i++)
{if(parmas.data[3]==datagw1[i][3]){flag=1;datagw1.splice(i,1);break;}
}
}
if(flag==0)
{
for(i=0;i<len3;i++)
{if(parmas.data[3]==datayl1[i][3]){flag=1;datayl1.splice(i,1);break;}
}
}
var min_star1 = 9999999999;
var max_star1 = 0;
var min_hot1 = 9999999999;
var max_hot1 = 0;
var min_num1 = 9999999999;
var max_num1 = 0;
 
len1 = datafjq1.length;
len2 = datagw1.length;
len3 = datayl1.length;
 
if(len1>0)
{
	for (var i = 0; i < len1; i++)
	{
		var a=parseFloat(datafjq1[i][0]);
		var b=parseInt(datafjq1[i][2]);
		var c= parseInt(datafjq1[i][1]);
		if (a < min_star1)
		{
		min_star1 = a;
		}
		if (b < min_num1)
		{
		min_num1 = b;
		}
		if (c < min_hot1)
		{
		min_hot1 = c;
		}
		if (a > max_star1)
		{
		max_star1 = a;
		}
		if (b > max_num1)
		{
		max_num1 = b;
		}
		if (c > max_hot1)
		{
		max_hot1 = c;
		}
	}
}
if(len2>0)
{
	for (var i = 0; i < len2; i++)
	{
		var a=parseFloat(datagw1[i][0]);
		var b=parseInt(datagw1[i][2]);
		var c= parseInt(datagw1[i][1]);
		if (a < min_star1)
		{
		min_star1 = a;
		}
		if (b < min_num1)
		{
		min_num1 = b;
		}
		if (c < min_hot1)
		{
		min_hot1 = c;
		}
		if (a > max_star1)
		{
		max_star1 = a;
		}
		if (b > max_num1)
		{
		max_num1 = b;
		}
		if (c > max_hot1)
		{
		max_hot1 = c;
		}
	}
}
if(len3>0)
{
	for (var i = 0; i < len3; i++)
	{
		var a=parseFloat(datayl1[i][0]);
		var b=parseInt(datayl1[i][2]);
		var c= parseInt(datayl1[i][1]);
		if (a < min_star1)
		{
		min_star1 = a;
		}
		if (b < min_num1)
		{
		min_num1 = b;
		}
		if (c < min_hot1)
		{
		min_hot1 = c;
		}
		if (a > max_star1)
		{
		max_star1 = a;
		}
		if (b > max_num1)
		{
		max_num1 = b;
		}
		if (c > max_hot1)
		{
		max_hot1 = c;
		}
	}
}

if(min_star1==max_star1) 
{min_star1=min_star1-2;max_star1=max_star1+2;}
if(min_hot1==max_hot1)
{max_hot1=2*max_hot1;}

      myChart.setOption({
		  xAxis: {
        type: 'value',
        name: '评分',
        nameGap: 16,
        nameTextStyle: {
            color: '#fff',
            fontSize: 14
        },
		min:min_star1,
		max:max_star1,
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#eee'
            }
        }
    },
    yAxis: {
        type: 'value',
        name: '热度',
		 min:0,
		 max:max_hot1,
        nameGap: 20,
        nameTextStyle: {
            color: '#fff',
            fontSize: 16
        },
        axisLine: {
            lineStyle: {
                color: '#eee'
            }
        },
        splitLine: {
            show: false
        }
    },
    visualMap: [
        {
            left: 'right',
            top: '30%',
            dimension: 2,
			  min:0,
			  max:max_num1,
            itemWidth: 30,
            itemHeight: 120,
            calculable: true,
            precision: 0.1,
            text: ['圆形大小：数量'],
            textGap: 30,
            textStyle: {
                color: '#fff'
            },
            inRange: {
                symbolSize: [10, 70]
            },
            outOfRange: {
                symbolSize: [10, 70],
                color: ['rgba(255,255,255,.2)']
            },
            controller: {
                inRange: {
                    color: ['#c23531']
                },
                outOfRange: {
                    color: ['#444']
                }
            }
        }
    ],
		  series: [
        {
            name: '购物',
            type: 'scatter',
            itemStyle: itemStyle,
            data: datagw1
        },
        {
            name: '娱乐',
            type: 'scatter',
            itemStyle: itemStyle,
            data: datayl1
        },
        {
            name: '风景区',
            type: 'scatter',
            itemStyle: itemStyle,
            data: datafjq1
        }
    ]

		  });
    });

}