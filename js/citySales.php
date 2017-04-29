<?php
	 header('content-type:text/html;charset="utf-8"');
     
$arr = array(
		array('cityTop'=>'北京市','value'=>'658'),
		array('cityTop'=>'天津市','value'=>'622'),
		array('cityTop'=>'上海市','value'=>'602'),
		array('cityTop'=>'重庆市','value'=>'521'),
		array('cityTop'=>'河北省','value'=>'400'),
		array('cityTop'=>'山西省','value'=>'398'),
		array('cityTop'=>'辽宁省','value'=>'360'),
		array('cityTop'=>'吉林省','value'=>'320'),
		array('cityTop'=>'黑龙江省','value'=>'233'),
		array('cityTop'=>'江苏省','value'=>'212')	
    );
     
    echo json_encode($arr);
?>