<template>
		<div class="headerWrap">
			<span>{{txt}}</span>
			<img src="../assets/images/ic_actionbar_search_icon.png" alt="" class="tiao" @click='tn'>
			<slot></slot>

			
				<input value='暂时搜索不了哦' class='sousuo' v-show='bol'></input>
			
		</div>

</template>

<style>
.headerWrap {width: 100%; height: 44px; background: #f8f8f8; border-bottom: 1px solid #b9b9b9; position: relative; text-align: center; line-height: 44px;} 
		.headerWrap img {position: absolute; width: 28px; top: 10px;}
		.headerWrap .leftImg {right: 60px;}
		.headerWrap .rightImg {right: 10px;}
		.sousuo{width:70%;height:30px;background:pink;position:absolute;top:8px;left:18px;background:#eee;border-radius: 10px;color:#7c7c7c;font-size:14px;border:none;line-height:30px;padding-left: 20px}
		
		.headerWrap .tiao{position:absolute;left:300px;}
</style>
<script>
 export default{
	  	props: ['txt'],
	  	data:function(){
	  		return{
	  			bol:false
	  		}
	  	},
	  	methods:{
	  		tn:function(){
	  		if(this.bol==false){
	  			this.bol=true
	  		}else if(this.bol==true){
	  			this.bol=false
	  		}

	  		}
	  	}

	  }


</script>