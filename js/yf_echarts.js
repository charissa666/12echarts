window.onload = function(){
	/*
	 *左侧地图echarts
	 */
	// 基于准备好的dom，初始化echarts实例
	var myMap = echarts.init(document.getElementById('main'));
	//数据
	var Adata = [
	    {name: '北京市', value: 0},
		{name: '天津市', value: 0},
		{name: '上海市', value: 0},
		{name: '重庆市', value: 0},
		{name: '河北省', value: 0},
		{name: '山西省', value: 0},
		{name: '辽宁省', value: 0},
		{name: '吉林省', value: 0},
		{name: '黑龙江省', value: 0},
		{name: '江苏省', value: 0},
		{name: '浙江省', value: 0},
		{name: '安徽省', value: 0},
		{name: '福建省', value: 0},
		{name: '江西省', value: 0},
		{name: '山东省', value: 0},
		{name: '河南省', value: 0},
		{name: '湖北省', value: 0},
		{name: '湖南省', value: 0},
		{name: '广东省', value: 0},
		{name: '海南省', value: 0},
		{name: '四川省', value: 0},
		{name: '贵州省', value: 0},
		{name: '云南省', value: 0},
		{name: '陕西省', value: 0},
		{name: '甘肃省', value: 0},
		{name: '青海省', value: 0},
		{name: '西藏自治区', value: 0},
		{name: '广西壮族自治区', value: 0},
	    {name: '内蒙古自治区', value: 0},
		{name: '宁夏回族自治区', value: 0},
		{name: '新疆维吾尔自治区', value: 0},
		{name: '香港特别行政区', value: 0},
		{name: '澳门特别行政区', value: 0},
		{name: '台湾', value: 0}
	];
	//坐标可自行添加
	var geoCoordMap = {
		"北京市":[116.46,39.92],
		"天津市":[117.13,39.26],
		"上海市":[121.36,31.30],
		"重庆市":[107.72,29.89],
	    "河北省":[114.89,38.82],
	    "山西省":[112.15,38.54],
	    "辽宁省":[123.24,40.95],
	    "吉林省":[125.13,44.49],
	    "黑龙江省":[126.48,46.69],
	    "江苏省":[120.12,32.75],
	    "浙江省":[120.04,29.35],
	    "安徽省":[117.17,32.60],
	    "福建省":[118.16,26.58],
	    "江西省":[115.81,29.07],
	    "山东省":[118.31,36.81],
	    "河南省":[112.55,34.04],
	    "湖北省":[112.62,30.76],
	    "湖南省":[111.80,28.87],
	    "广东省":[113.23,23.22],
	    "海南省":[110.18,19.42],
	    "四川省":[102.32,30.80],
	    "贵州省":[106.65,27.34],
	    "云南省":[101.30,25.25],
	    "陕西省":[108.99,35.20],
	    "甘肃省":[103.77,36.72],
	    "青海省":[99.61,36.75],
	    "西藏自治区":[89.27,29.84],
	    "广西壮族自治区":[108.27,23.62],
	    "内蒙古自治区":[111.61,41.59],
	    "宁夏回族自治区":[106.09,37.62],
	    "新疆维吾尔自治区":[85.48,43.89],
	    "香港特别行政区":[114.15,22.54],
	    "澳门特别行政区":[113.41,22.34],
	    "台湾":[121.36,24.25]
	};
	//循环调取每个地区的名字和坐标，放到res中
	var convertData = function (Adata) {
	    var res = [];
	    for (var i = 0; i < Adata.length; i++) {
	        var geoCoord = geoCoordMap[Adata[i].name];
	        if (geoCoord) {
	            res.push({
	                name: Adata[i].name,
	                value: geoCoord.concat(Adata[i].value)
	            });
	        }
	    }
	    return res;
	};
	
	// 指定图表的配置项和数据
	var option = {
	    backgroundColor: '#333',
	    title: {
	        text: '网站销量分布图',
	        link: 'http://www.yaofang.cn',//点击链接地址
	        x:'center',//标题位置
	        top:'80',
	        textStyle: {
	            color: '#fff',//字体颜色
	            fontSize: 24
	        }
	    },
	    tooltip: {
	        trigger: 'item',//数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用
	        formatter: function (params) {
	            return params.name + ' : ' + params.value[2];鼠标放上每一个小圆点显示内容
	        },
//	        triggerOn: 'click'			//设置为点击的时候显示内容
	    },
	    visualMap: {//是视觉映射组件，用于进行『视觉编码』，也就是将数据映射到视觉元素（视觉通道）
	        type: 'piecewise',
	        bottom: 50,
	        left: 10,
	        pieces: [					//左下角显示数据
	        	{gte: 300, lt: 400, color: '#fa0b0b'},
	        	{gte: 200, lt: 300, color: '#d94e5d'},
	        	{gte: 100, lt: 200, color: '#f2822e'},
	        	{gte: 50, lt: 100, color: '#eac736'},
	        	{gte: 1, lt: 50, color: '#9db578'},
	        	{value: 0, color: '#50a3ba'}
	        ],
	        textStyle: {
	            color: '#fff'
	        }
	    },
	    geo: {//地理坐标系组件
	        map: 'china',//中国地图，地图类型。
	        roam: true,	//是否缩放
	        label: {//图形上的文本标签
	            normal: {
	                show: true,//省份显示与否
	                textStyle:{
	                	color:'#fff',
	                	fontSize: 16
	                }
	            },
	            emphasis: {
	            	textStyle:{
	                	color:'#fff',
	                	fontSize: 16
	                }
	            }
	        },
	        itemStyle: {
	            normal: {
	                areaColor: '#2e5386',//地图颜色
	                borderColor: '#111'//省份之间的分界线颜色
	            },
	            emphasis: {
	                areaColor: '#38629c'//鼠标移入省份的颜色变化
	            }
	        }
	    },
	    series: [//系列列表
	        {
	            name: '订单散点',
	            type: 'scatter',
	            coordinateSystem: 'geo',
	         	data: [],
	            symbolSize: 16,//小圆点的大小
	            label: {
	                normal: {
	                    show: false
	                },
	                emphasis: {
	                    show: false
	                }
	            },
	            itemStyle: {
	                emphasis: {
	                    borderColor: '#fff',//边框颜色
	                    borderWidth: 1//边框大小
	                }
	            }
	        },{
	        	name: '新的订单',
	            type: 'effectScatter',
	            coordinateSystem: 'geo',
				data:[],
	            symbolSize: 20,
	            showEffectOn: 'render',
	            rippleEffect:{
	            	brushType: 'stroke'		//波纹效果
	            },
	            hoverAnimation: true,
	            label: {
	                normal: {
	                    show: false
	                },
	                emphasis: {
	                    show: false
	                }
	            },
	            itemStyle: {
	            	normal: {
	                    shadowBlur: 1,
	                    shadowColor: '#ff0'
	                },
	                emphasis: {
	                    borderColor: '#fff',//边框颜色
	                    borderWidth: 1//边框大小
	                }
	            }
	        }
	    ]
	}
	// 使用刚指定的配置项和数据显示图表。
	myMap.setOption(option);
	
	//获取指定省下标
	function cityIndex(cityName){
		for(var i = 0; i < Adata.length; i++){
			if(Adata[i].name == cityName){
				return i;
			}
		}
	};

			
	/*
	 * 右侧条形图echarts
	 */
	var mySales = echarts.init(document.getElementById("rightB"));

	var optionSales = {
		title:{
			text:'门店销量排行图',
			top: 5,
			textStyle: {
	            color: '#fff',//字体颜色
	            fontSize: 16
	       }
		},
		backgroundColor: '#333',
	    textStyle:{color:'#fff'},
		tooltip:{
			triggerOn: 'click',		//设置为点击的时候显示内容
		},
		legend:{
			data:['销量'],
			top: 5,
			textStyle: {
				color: '#fff'
			}
		},
		xAxis:{
			data:[],
			axisLabel:{
				alignWithLabel:true,		//标签内容水平对齐
				interval:0,					//显示横坐标所有标签
				textStyle:{
					color: '#fff'
				},
				rotate:30
			},
			axisLine:{
				lineStyle:{
					color: '#fff'
				}
			}
		},
		yAxis:{
			axisLabel:{
				textStyle:{
					color: '#fff'
				}
			},
			axisLine:{
				lineStyle:{
					color: '#fff'
				}
			}
		},
		series:[{
			name:'销量',
			type:'bar',
			data:[],
			itemStyle:{
				normal:{
					color: '#f4ba30'
				}
			},
			textStyle: {
	            color: '#fff'
	        }
		}]
	};
	mySales.setOption(optionSales);

	
	//日期格式化
	Date.prototype.Format = function(fmt){ 
		var o = {   
			"M+" : this.getMonth()+1,                 //月份   
			"d+" : this.getDate(),                    //日   
			"h+" : this.getHours(),                   //小时   
			"m+" : this.getMinutes(),                 //分   
			"s+" : this.getSeconds(),                 //秒   
			"q+" : Math.floor((this.getMonth()+3)/3), //季度   
			"S"  : this.getMilliseconds()             //毫秒   
		};   
		if(/(y+)/.test(fmt))   
		fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));   
		for(var k in o)   
		if(new RegExp("("+ k +")").test(fmt))   
		fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
		return fmt;   
	}  
	
	function citySales(){
		var user='';
		var name='' ;
		$.ajax({
			type:"get",
			url:"http://api.yaofang.cn/echarts/now_order",
			dataType:'jsonp',  
	        data:'',  
	        jsonp:'callback', 
			success:function(data)
			{
				document.getElementById("time").innerHTML = new Date().Format('yyyy-MM-dd hh:mm:ss');;
				var data = eval(data);
				//门店销量数据
				var data_money = data.shopper_money;
				if(data_money.length > 0){
					var dataCity = [];
					var dataSales = [];
					for(var i = 0; i < data_money.length; i++){
						var Sname = data_money[i].sn_shop;
						Sname = Sname.replace('420','');
						Sname = Sname.replace('667898','46')
//						Sname = Sname.replace('1322','47')
						dataCity.push(Sname);
						dataSales.push(data_money[i].sales);
					}
					mySales.setOption({
						xAxis:{
							data:dataCity
						},
						series:[{
							data:dataSales
						}]
					});
				}
				
				//订单信息数据
				var data_message = data.order_message;
				//获取订单的省份
				if(data_message.length > 0){
					var addArr = [];				//传入echarts的省份格式
					var addName_34 = [];			//中国的34个省
					var list = [];					//接收到的省份整理后的数组
					var listMap = {};
					for(var i = 0; i < Adata.length; i++){
						addName_34.push(Adata[i].name);
					}
					for(var i = 0, Cname; i < data_message.length; i++){
						Cname = data_message[i].city;
						if(addName_34.indexOf(Cname) != -1){
							if (listMap[Cname]) {
						        listMap[Cname]++;
						    } else {
						        listMap[Cname] = 1;
						    }
						}
		        		//右侧订单信息
						user += '<li><span>'+data_message[i].userName+'</span><i>价格:'+data_message[i].money+'元</i>'+data_message[i].new_adds+'</li>';
		        	};
		        	for (var x in listMap) {
					    list.push({
					        Cname: x,
					        Cvalue: listMap[x]
					    });
					};
					for(var i = 0; i < list.length; i++){
						for(var j = 0; j < Adata.length; j++){
		        			if(list[i].Cname == Adata[j].name){
			        			Adata[j].value += list[i].Cvalue;
			        		}
		        		}
					}
		        	for(var i = 0; i < list.length; i++){
	        			addArr.push(Adata[cityIndex(list[i].Cname)]);
	        		}
		        	$('#ul').html(user);
					//填入数据
					myMap.setOption({
						series:[
							{
					         	data: convertData(Adata)
					        },{
					        	data: convertData(addArr)
					        }
						]
					});
				}
			}
		});
	}
	
	citySales();
	setInterval(function(){
		citySales();
	},300000)
	
	//订单信息滚动
	function scroll(h){
		clearInterval(bb);
		$("#ul").stop().animate({"margin-top":h},function(){
			$("#ul li:eq(0)").appendTo($("#ul"));
			$("#ul").css({"margin-top":0});
		})
	}

	var bb;
	var aa = setInterval(function(){	
		var i = 0;
		var o = 0;
		i = $("#ul li").length*($("#ul li").height()+30);
		o = $("#scrollbox").height();
		var h = -($("#ul li").height()+30);
		if(i>o){
			bb = setInterval(scroll(h),1000);
		}else{
			clearInterval(bb);
		}
	},2000);
	
	//定时刷新页面
	setInterval(function(){
		if(new Date().Format('hh') == '10'){
			window.location.reload();
		}
	},3600000)

};			
  