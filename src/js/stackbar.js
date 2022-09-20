(function(){
    var dom = document.getElementById("paimingtu");
    var myChart = echarts.init(dom,'dark');
    var app = {};
    var state =0;//0代表所有国家
    var dataHot = [];
	var dataRate = [];
    dataHot = getdataHot(state,null);
	dataRate = getdataRate(state,null); 
    
    option = {
		backgroundColor: "#044161",
		title: {
        text: '热度／评分排名',
    },
        legend: {
            data:['购物', '娱乐', '风景区'],
        
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        dataset: [{
            dimensions: ['product', '购物', '娱乐', '风景区'],
            source:dataHot
        },
        {
            dimensions:['product', '购物', '娱乐', '风景区'],
            source:dataRate
        }
        ],
        toolbox: {
			 left:'90%',
            show: true,
            feature: {
                magicType: {type: ['line', 'bar']},
                saveAsImage: {}
            }
        },
        yAxis: [//目录默认对应第一列
            {type: 'category', gridIndex: 0},
            {type: 'category', gridIndex: 1}
        ],
        xAxis: [
            {gridIndex: 0,containLabel:true},
            {gridIndex: 1,containLabel:true}
        ],
        grid: [
            {x: '8%', y: '10%', width: '40%', height: '80%'},
            {x: '56%', y: '10%', width: '40%', height: '80%'}
        ],
        series: [
            // These series are in the first grid.
            {name:'购物',type: 'bar',stack:'1',datasetIndex:0,
            label: {
                    normal: {
                        show: false,
                        position: 'insideRight'
                    }
                }
            },
            {name:'娱乐',type: 'bar',stack:'1',datasetIndex:0,
            label: {
                    normal: {
                        show: false,
                        position: 'insideRight'
                    }
                }
            },
            {name:'风景区',type: 'bar',stack:'1',datasetIndex:0,
            label: {
                    normal: {
                        show: false,
                        position: 'insideRight'
                    }
                }
            },
            // These series are in the second grid.
            {name:'购物',type: 'bar', xAxisIndex: 1, yAxisIndex: 1,stack:'2',datasetIndex:1,
            label: {
                    normal: {
                        show: false,
                        position: 'insideRight'
                    }
                }
            },
            {name:'娱乐',type: 'bar', xAxisIndex: 1, yAxisIndex: 1,stack:'2',datasetIndex:1,
            label: {
                    normal: {
                        show: false,
                        position: 'insideRight'
                    }
                }
            },
            {name:'风景区',type: 'bar', xAxisIndex: 1, yAxisIndex: 1,stack:'2',datasetIndex:1,
            label: {
                    normal: {
                        show: false,
                        position: 'insideRight'
                    }
                }
            }
        ]
    };
    ;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
    //给其他图传参
    myChart.on('click', function (parmas) {
        if(state==2)
		{
		 showLeidatu("某景点",parmas.name);	
        showQipaotu("某景点",parmas.name);
		}
    });
    
})();


//接收来自地图的参数
    function receiveDataOfMap(state,name){
		
			dataHot = getdataHot(state,name);
			dataRate = getdataRate(state,name);

	var dom = document.getElementById("paimingtu");
    var myChart = echarts.init(dom,'dark');
    var app = {};
    
    option = {
		backgroundColor: "#044161",
		title: {
        text: '热度／评分排名',
    },
        legend: {
            data:['购物', '娱乐', '风景区'],
        
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        dataset: [{
            dimensions: ['product', '购物', '娱乐', '风景区'],
            source:dataHot
        },
        {
            dimensions:['product', '购物', '娱乐', '风景区'],
            source:dataRate
        }
        ],
        toolbox: {
			left:'90%',
            show: true,
            feature: {
                magicType: {type: ['line', 'bar']},
                saveAsImage: {}
            }
        },
        yAxis: [//目录默认对应第一列
            {type: 'category', gridIndex: 0},
            {type: 'category', gridIndex: 1}
        ],
        xAxis: [
            {gridIndex: 0,containLabel:true},
            {gridIndex: 1,containLabel:true}
        ],
        grid: [
            {x: '8%', y: '10%', width: '40%', height: '80%'},
            {x: '56%', y: '10%', width: '40%', height: '80%'}
        ],
        series: [
            // These series are in the first grid.
            {name:'购物',type: 'bar',stack:'1',datasetIndex:0,
            label: {
                    normal: {
                        show: false,
                        position: 'insideRight'
                    }
                }
            },
            {name:'娱乐',type: 'bar',stack:'1',datasetIndex:0,
            label: {
                    normal: {
                        show: false,
                        position: 'insideRight'
                    }
                }
            },
            {name:'风景区',type: 'bar',stack:'1',datasetIndex:0,
            label: {
                    normal: {
                        show: false,
                        position: 'insideRight'
                    }
                }
            },
            // These series are in the second grid.
            {name:'购物',type: 'bar', xAxisIndex: 1, yAxisIndex: 1,stack:'2',datasetIndex:1,
            label: {
                    normal: {
                        show: false,
                        position: 'insideRight'
                    }
                }
            },
            {name:'娱乐',type: 'bar', xAxisIndex: 1, yAxisIndex: 1,stack:'2',datasetIndex:1,
            label: {
                    normal: {
                        show: false,
                        position: 'insideRight'
                    }
                }
            },
            {name:'风景区',type: 'bar', xAxisIndex: 1, yAxisIndex: 1,stack:'2',datasetIndex:1,
            label: {
                    normal: {
                        show: false,
                        position: 'insideRight'
                    }
                }
            }
        ]
    };
    ;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
    //给其他图传参
    myChart.on('click', function (parmas) {
         if(state==2)
		{
		 showLeidatu("某景点",parmas.name);	
        showQipaotu("某景点",parmas.name);
		}
    });  
        
    }
