<?php
	 header('content-type:text/html;charset="utf-8"');
     
$arr = array(
		array('cityName'=>'北京市','cityNum'=>'365'),
		array('cityName'=>'天津市','cityNum'=>'21'),
		array('cityName'=>'上海市','cityNum'=>'52'),
		array('cityName'=>'重庆市','cityNum'=>'452'),
		array('cityName'=>'河北省','cityNum'=>'78'),
		array('cityName'=>'山西省','cityNum'=>'154'),
		array('cityName'=>'辽宁省','cityNum'=>'21'),
		array('cityName'=>'吉林省','cityNum'=>'52'),
		array('cityName'=>'黑龙江省','cityNum'=>'452'),
		array('cityName'=>'江苏省','cityNum'=>'78'),
		array('cityName'=>'浙江省','cityNum'=>'154'),
		array('cityName'=>'安徽省','cityNum'=>'21'),
		array('cityName'=>'福建省','cityNum'=>'52'),
		array('cityName'=>'江西省','cityNum'=>'452'),
		array('cityName'=>'山东省','cityNum'=>'78'),
		array('cityName'=>'河南省','cityNum'=>'154'),
		array('cityName'=>'湖北省','cityNum'=>'21'),
		array('cityName'=>'湖南省','cityNum'=>'52'),
		array('cityName'=>'广东省','cityNum'=>'452'),
		array('cityName'=>'海南省','cityNum'=>'78'),
		array('cityName'=>'四川省','cityNum'=>'154'),
		array('cityName'=>'贵州省','cityNum'=>'21'),
		array('cityName'=>'云南省','cityNum'=>'52'),
		array('cityName'=>'陕西省','cityNum'=>'452'),
		array('cityName'=>'甘肃省','cityNum'=>'78'),
		array('cityName'=>'青海省','cityNum'=>'154'),
		array('cityName'=>'西藏自治区','cityNum'=>'21'),
		array('cityName'=>'广西壮族自治区','cityNum'=>'52'),
		array('cityName'=>'内蒙古自治区','cityNum'=>'452'),
		array('cityName'=>'宁夏回族自治区','cityNum'=>'78'),
		array('cityName'=>'新疆维吾尔自治区','cityNum'=>'154'),
		array('cityName'=>'香港特别行政区','cityNum'=>'21'),
		array('cityName'=>'澳门特别行政区','cityNum'=>'52'),
		array('cityName'=>'台湾','cityNum'=>'452')

	
		
    );
     
    echo json_encode($arr);
?>