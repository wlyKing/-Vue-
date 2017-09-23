<template>
<div class='tvwarp'>
	<div class='botton'>
	<h4>编辑推荐</h4>
	<div class='music1'>
	<img src='../../assets/images/book-2_03.jpg'>
	</div>
	<div class='music1 music2'>
	<img src='../../assets/images/book-1_03.jpg'>
	</div>
	<div class='music1 music3'>
	<img src='../../assets/images/book0_03.jpg'>
	</div>
	<div class='music1 music4'>
	<img src='../../assets/images/book-2_03.jpg'>
	</div>
	</div>
	<flima txt1='解忧杂货铺...' txt2='白夜行'  txt3='恶意'  txt4='嫌疑犯X' hot='新书速递'>
	<img src='../../assets/images/book1.jpg' slot='slot1'>
	<img src='../../assets/images/book2.jpg' slot='slot2'>
	<img src='../../assets/images/book3.jpg' slot='slot3'>
	<img src='../../assets/images/book4.jpg' slot='slot4'>
	<img src='../../assets/images/book-10.jpg' slot='slot6'>
	<img src='../../assets/images/book-11.jpg' slot='slot7'>
	</flima>

	
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
.tvwarp{height:280px}
.tvwarp{height:350px}
.botton{width:375px;overflow:auto;height:190px}
.tvwarp .botton h4{float:left;margin:15px;font-size:16px;color:#5c5c5c;padding-bottom:10px;position: absolute;top:-8px}
.tvwarp img{width:150px;display: block;}
.tvwarp .botton{position: relative;bottom:0;height:200px;top:10px}
.tvwarp .music1{position: absolute;width:100px;left:10px;top:40px}
.tvwarp .music2{left:170px;}
.tvwarp .music3{left:330px;}
.tvwarp .music4{left:490px;}
</style>