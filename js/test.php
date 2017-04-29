<?php
	 header('content-type:text/html;charset="utf-8"');
     
$arr = array(
		array('userName'=>'1席辉辉','address'=>'北京市北京市丰台区新村街道星火路9号京卫药业大厦','city'=>'北京市','money'=>'150'),
		array('userName'=>'2刘烨鹏','address'=>'北京市北京市朝阳区来广营双营路6号院甲1','city'=>'北京市','money'=>'89'),
		array('userName'=>'3赵东圭','address'=>'新疆维吾尔自治区昌吉回族自治州呼图壁县106团','city'=>'新疆维吾尔自治区','money'=>'358'),
		array('userName'=>'4向泊虽','address'=>'内蒙古自治区呼和浩特市新城区八一市场北门大力公司小区34号楼9单元2号','city'=>'内蒙古自治区','money'=>'133'),
		array('userName'=>'5何启龙','address'=>'山西省运城市稷山县稷峰镇康复路丰喜苑储蓄所','city'=>'山西省','money'=>'45'),
		array('userName'=>'6薛晓洋','address'=>'吉林省延边朝鲜族自治州图们市月宫街道','city'=>'吉林省','money'=>'83'),
//		array('userName'=>'7闫有','address'=>'重庆市重庆市沙坪坝区磁器口街道','city'=>'重庆市','money'=>'125'),
//		array('userName'=>'8杨里','address'=>'福建省三明市 明溪县城关乡','city'=>'福建省','money'=>'63')
//	
		
    );
     
    echo json_encode($arr);
?>