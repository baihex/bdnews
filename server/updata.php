<?php

header('Content-type: application/json;charset=utf-8');
$link=mysqli_connect('localhost','root','','bdnews',3306);
if($link){
//读取提交的表单
$newstitle=$_POST['newstitle'];
$newstype=$_POST['newstype'];
$newstime=$_POST['newstime'];
$newsimg=$_POST['newsimg'];
$newssrc=$_POST['newssrc'];
$newsid=$_POST['id'];
//向数据库添加数据
$sql="UPDATE `news` SET `newstitle`='{$newstitle}',`newstype`='{$newstype}',`newsimg`='{$newsimg}',`newstime`='{$newstime}',`newssrc`='{$newssrc}' WHERE `id`={$newsid}";
mysqli_query($link,"SET NAMES utf8");
$result=mysqli_query($link,$sql);


echo json_encode(array('success'=>'ok'));

}else{
echo json_encode(array('连接数据库'=>'fail'));
}
//$arr=array('newstype'=>'100',
//'newsimg'=>'img/3.jpeg',
//'newstime'=>'2017-4-4',
//'newssrc'=>'网易',
//'newstitle'=>'news'
//);
//echo json_encode($arr);
mysqli_close($link);
?>