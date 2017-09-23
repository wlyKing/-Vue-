<template>
	<div>
		<ul>
			<li :class="{acti:inde==0}" @click='fn(0)'><router-link to="/broadcast/film" >电影</router-link></li>
			<li :class="{acti:inde==1}" @click='fn(1)'><router-link to="/broadcast/study">读书</router-link></li>
			<li :class="{acti:inde==2}" @click='fn(2)'><router-link to="/broadcast/tv">电视</router-link></li>
			<li :class="{acti:inde==3}" @click='fn(3)'><router-link to="/broadcast/local">同城</router-link></li>
			<li :class="{acti:inde==4}" @click='fn(4)'><router-link to="/broadcast/music">音乐</router-link></li>
		</ul>
		<div>
		<router-view></router-view>
		</div>

	</div>


</template>
<style>
	ul{height:40px}
	li{list-style-type:none;float:left;width:20%;text-align:center;height:40px;line-height:40px;font-size:16px}
	a{text-decoration:none;color:#9a9a9a}
	.acti{border-bottom:2px solid #63c882}
</style>
<script>
  export default{
	 data:function(){
	 		return{
	 			inde:0
	 		}
	 },
	 methods:{
	 	fn:function(num){
	 		this.inde=num
	 	}
	 }
	  	

	  }
</script>	  