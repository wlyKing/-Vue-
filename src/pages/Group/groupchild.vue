<template>
	<div class='groupwarp'>

		<div class='xiaozu'>
			<div class="cleft">
				<slot name='tu'></slot>
				
			</div>
			<div class="right">
				<h3>{{h}}</h3>
				<p>{{p}}</p>
				<slot name='dian'></slot>
				
			</div>
			<span>{{sun}}</span>
			

		</div>


	</div>
</template>
<style>
	.xiaozu{height:85px;width:100%;padding:0 20px;position: relative;}
	.xiaozu .cleft{float:left;width:20%}
	.xiaozu .right{float:left;width:75%}
	.xiaozu .right>h3{font-size:16px;}
	.xiaozu .right>p{padding-right:120px;font-size:12px;color:#a0a0a0}
	.xiaozu>span{color:#cecece;font-size:12px;position: absolute;top:20px;left:270px}
	.xiaozu .cleft img{width:60px}
	.xiaozu .right img{width:30px;height:30px;position: absolute;top:0px;left:330px}
</style>
<script>

	  export default{
	  	props:['sun','h','p']

	  }

</script>