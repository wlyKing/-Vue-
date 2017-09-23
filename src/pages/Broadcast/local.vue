<template>
<div class='tvwarp'>
	<flima txt1='米开朗艺术' txt2='双人展'  txt3='月亮与六便士'  txt4='维纳斯' txt5='音乐之声' txt6='你好忧愁' hot='同城活动'>
	<img src='../../assets/images/cit-1_03.jpg' slot='slot1'>
	<img src='../../assets/images/cit-1_05.jpg' slot='slot2'>
	<img src='../../assets/images/cit-1_07.jpg' slot='slot3'>
	<img src='../../assets/images/cit-1_01.jpg' slot='slot4'>
	<img src='../../assets/images/cit-1_02.jpg' slot='slot6'>
	<img src='../../assets/images/cit-1_04.jpg' slot='slot7'>
	</flima>

	<div class='botton'>
	<h4>编辑推荐</h4>
	<div class='music1'>
	<img src='../../assets/images/music1_02.jpg'>
	</div>
	<div class='music1 music2'>
	<img src='../../assets/images/music1_01.jpg'>
	</div>
	<div class='music1 music3'>
	<img src='../../assets/images/music1_03.jpg'>
	</div>
	<div class='music1 music4'>
	<img src='../../assets/images/music_05.jpg'>
	</div>
	</div>

</div>
</template>
<script>
	
	import flima from './flima'
	 	
	
	  export default{
	  	components:{
       		flima
        }
	  }


</script>
<style>
.tvwarp{height:620px}
.tvwarp{height:350px}
.tvwarp .botton h4{float:left;margin:15px;font-size:16px;color:#5c5c5c;padding-bottom:10px}
.tvwarp img{width:150px;display: block;}
.tvwarp .botton{position: relative;bottom:0;height:230px;width:375px;overflow:auto;}
.tvwarp .music1{position: absolute;width:100px;left:10px;top:40px}
.tvwarp .music2{left:170px;}
.tvwarp .music3{left:330px;}
.tvwarp .music4{left:490px;}
</style>