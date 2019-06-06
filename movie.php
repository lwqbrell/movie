<?php
/**
 * Created by PhpStorm.
 * User: Trevor
 * Date: 2019/6/5
 * Time: 17:58
 */

$title=$_GET['title'];
$url="http://live.langziphp.com/v1/movie?title=".$title;
$ch=curl_init();
curl_setopt($ch,CURLOPT_URL,$url);
curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
$result=curl_exec($ch);
curl_close($ch);
echo $result;
