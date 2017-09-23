<template>
	<div claa="homeWarp">
		<div class="news">
			<div class="left">
			<h3><a href="audio"><<加勒比海盗>>17年老粉给你带来所有彩蛋和深埋梗</a></h3>
			<p><a href="audio">此影评送给那些不离不弃的老粉和船长杰克.斯派罗</a></p>
			<span></span>
			<p>作者：女神的秋裤</p>
			</div>
			<div class="right">
			<a href="audio"><img src="../../assets/images/timg.jpg" alt=""></a>
			</div>
		   </div>
		  <div class="news sun">
			<div class="left">
			<h3><a href="audio">一周豆瓣热门影视|二十年后，这帮苏格兰老炮儿还是那么嗨</a></h3>
			<p><a href="audio">三个榜单的冠军与上周一样，冠军们大概独孤求败......</a></p>
			<span></span>
			<p>作者：豆瓣</p>
			</div>
			<div class="right">
			<a href="audio"><img src="../../assets/images/media.jpg" alt=""></a>
			<p>来自栏目：一周热门影视</p>
			</div>
		   </div> 
		</div>
</template>
<style>
	.banner img{width:100%;}
	.news{height:180px;position: relative;}
	.sun{border-top:1px solid #eee;}
	.news .left{width:60%;float:left;margin-top:10px}
	.news .left h3{color:#676767;font-size:18px;padding:0 20px}
	.news .left p{color:#a3a3a3;border:none;font-size:14px;margin:10px 20px;}
	.news .right p{color:#a3a3a3;border:none;font-size:14px;position: absolute;top:155px;right:30px}
	a{color:#676767;}
	.news .left span{width:15px;height:1px;background:#d3d3d3;display:block;margin-left:20px}
	.news .right{width:40%;float:right;}
	.hot{color:#fe9d50;border-left:5px solid #fe9d50;padding-left:30px;margin:20px 0;font-size:18px;font-weight: bold;}
	.right img{width:120px;height:120px;float:right;margin-right:30px;margin-top:10px}
	
</style>

<script>

 export default{
	     props: ['txt']
	  }

</script>

