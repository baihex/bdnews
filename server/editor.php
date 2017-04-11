<?php

header('Content-type: application/json;charset=utf-8');
$link=mysqli_connect('localhost','root','','bdnews',3306);
if($link){
//读取提交的表单
$newsid=$_GET['newsid'];

//向数据库删除数据
$sql="SELECT * FROM `news` WHERE `id`={$newsid}";

mysqli_query($link,"SET NAMES utf8");
$result=mysqli_query($link,$sql);

$senddata=array();
while($row=mysqli_fetch_assoc($result)){
array_push($senddata,array(
'id'=>$row['id'],
'newstype'=>$row['newstype'],
'newstitle'=>$row['newstitle'],
'newsimg'=>$row['newsimg'],
'newstime'=>$row['newstime'],
'newssrc'=>$row['newssrc']
));
}
echo json_encode($senddata);
mysqli_close($link);

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
?>