<template>
	<div claa="homeWarp">
		<homechild></homechild>
		<pic swiperid='go'>
			<div class="swiper-slide" slot='swiper-con'>
				<a href="audio"><img src='../../assets/images/banner/02.jpg'/></a>
			</div>
			<div class="swiper-slide" slot='swiper-con'>
				<a href="audio"><img src='../../assets/images/banner/01.jpg'/></a>
			</div>
			<div class="swiper-slide" slot='swiper-con'>
				<a href="audio"><img src='../../assets/images/banner/03.jpg'/></a>
			</div>
		</pic>

		<p class="hot">热点</p>
		<news></news>
	</div>
</template>
<style>
	
	
	.homeWarp .hot{color:#fe9d50;border-left:5px solid #fe9d50;padding-left:30px;font-size:18px;font-weight: bold;margin-top:30px}
	* {margin: 0; padding: 0;}
	span img{width:100%}
	
		
</style>

<script>
	
	 import homechild from './homechild'
	 import news from './news'
	 import pic from './pic'
	
	  export default{
	  	components:{
          homechild,
         news,
         pic
        }
	  }


</script>
