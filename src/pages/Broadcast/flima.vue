<template>
<div>
	<div class="top">
		<div class="text">
			<h4>{{hot}}</h4>
			<p>更多></p>
		</div>
		<div class='pic'>
			<div class='pic0'>
				<slot name='slot1'></slot>
				<p>{{txt1}}</p>
				<img src='../../assets/images/3_03.jpg' class='xin'>
				
				<span>8.5</span>
			</div>		
			<div class='pic0 pic1'>
				<slot name='slot2'></slot>
				<p>{{txt2}}</p>
				<img src='../../assets/images/3_03.jpg' class='xin'>
				<span>9.5</span>
			</div>

			<div class='pic0 pic2'>
				<slot name='slot3'></slot>
				<p>{{txt3}}</p>
				<img src='../../assets/images/3_03.jpg' class='xin'>
				<span>7.5</span>
			</div>
			<div class='pic0 pic3'>
				<slot name='slot4'></slot>
				<p>{{txt4}}</p>
				<img src='../../assets/images/3_03.jpg' class='xin'>
				<span>8.5</span>
			</div>
			<div class='pic0 pic4'>
				<slot name='slot6'></slot>
				<p>{{txt5}}</p>
				<img src='../../assets/images/3_03.jpg' class='xin'>
				<span>6.5</span>
			</div>
			<div class='pic0 pic5'>
				<slot name='slot7'></slot>
				<p>{{txt6}}</p>
				<img src='../../assets/images/3_03.jpg' class='xin'>
				<span>6.5</span>
			</div>
		</div>	

	</div>
</div>
</template>
<script>
	export default{
		props:['txt1','txt2','txt3','txt4','hot','txt5','txt6']



	}


</script>
<style>
	.top{background:#fff;width:100%;height:250px;border-top:15px solid #eee;border-bottom:15px solid #eee;}
	.top .text{height:58px;}
	.top h4{float:left;margin:15px;font-size:16px;color:#5c5c5c}
	.top .text p{margin:15px;color:#42c055;font-size:16px;float:right}
	.filmWarp .mid h3{margin:5px 15px;text-align:center;font-size:16px;font-weight: normal;}
	.filmWarp .mid img{width:100%}
	.top .pic{width:375px;overflow:auto;height:190px}
	.top .pic img{height:130px;width:90px;float:left;display:block;position: absolute;}
	.top .pic .xin{height:15px;width:70px;position: absolute;top:155px;}
	.top .pic0{left:10px;position: relative;width:130px}
	.top .pic0 p{position: absolute;top:130px;font-size:15px;font-weight:bold}
	.top .pic0 span{position: absolute;top:155px;font-size:12px;left:70px}
	.top .pic1{left:110px}
	.top .pic2{left:210px}
	.top .pic3{left:310px}
	.top .pic4{left:410px}
	.top .pic5{left:510px}
</style>