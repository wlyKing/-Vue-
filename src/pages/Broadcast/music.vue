<template>
<div class='musicwarp'>
	<flima txt1='WE YOUNG' txt2='My Decade'  txt3='1+1=1'  txt4='The WAR' hot='热销唱片' txt5='WHITE'  txt6='Holiday' >
	<img src='../../assets/images/music-1.jpg' slot='slot1'>
	<img src='../../assets/images/music-2.jpg' slot='slot2'>
	<img src='../../assets/images/music-3.jpg' slot='slot3'>
	<img src='../../assets/images/music-4.jpg' slot='slot4'>
	<img src='../../assets/images/music-5.jpg' slot='slot6'>
	<img src='../../assets/images/music-6.jpg' slot='slot7'>
	</flima>
	
	<div class='botton'>
	<h4>编辑推荐</h4>
	<div class='music1'>
	<img src='../../assets/images/music1_03.jpg'>
	</div>
	<div class='music1 music2'>
	<img src='../../assets/images/music_05.jpg'>
	</div>
	<div class='music1 music3'>
	<img src='../../assets/images/music1_02.jpg'>
	</div>
	<div class='music1 music4'>
	<img src='../../assets/images/music1_01.jpg'>
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
.musicwarp{height:350px}
.musicwarp .botton h4{float:left;margin:15px;font-size:16px;color:#5c5c5c;padding-bottom:10px}
.musicwarp .botton img{width:150px;display: block;}
.musicwarp .botton{position: relative;bottom:0;height:230px;width:375px;overflow:auto;}
.musicwarp .music1{position: absolute;width:100px;left:10px;top:40px}
.musicwarp .music2{left:170px;}
.musicwarp .music3{left:330px;}
.musicwarp .music4{left:490px;}
</style>