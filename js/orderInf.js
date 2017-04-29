$(document).ready(function(){

	function show(){
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
				var data = eval(data);
				var data_message = data.order_message;
				if(data_message.length > 0){
					for (var i = 0; i < data_message.length;i++) {
						name = data_message[i].userName;
						user += "<li>"+Name(name)+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;价格:"+data_message[i].money+"元<br />"+data_message[i].new_adds+"</li>"
					}
					$('#ul').html(user);
				}
			}
		});
	}
	function Name(name){
		var length = name.length-1;
		name = name.substring(0,1);
		for (var i = 0; i< length; i++) {
			name +=" *";
		}
		return name;
	}
	show();
//	setInterval(function(){
//		show();
//	},3000)

	function scroll(h){
		clearInterval(bb);
		$("#ul").stop().animate({"margin-top":h},function(){
			$("#ul li:eq(0)").appendTo($("#ul"))
			$("#ul").css({"margin-top":0})
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
	},2000)


});