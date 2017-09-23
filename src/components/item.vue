<template>
	<div class='iconWarp' @click='fn'>
		<span v-show='bol'><slot name='active'></slot></span>
		<span v-show='!bol'><slot name='normal'></slot></span>
		<span :class="{active:bol}">{{txt}}</span>
	</div>

</template>
<script>
	export default{
		props:['txt','mark','sel'],
		computed:{
			bol:function(){
				if(this.mark==this.sel){
					return true
				}
				return false
			}
		},
		methods:{
			fn:function(){
				this.$emit('chang',this.mark);
				this.$router.push('/'+this.mark);
			}
			 

		}

		}

	


</script>
<style>
	.iconWarp {width:20%; float:left;text-align: center; font-size:0}
	.iconWarp span{font-size:12px;color:#999;display: block; }
	.iconWarp img{width:40px;height:40px}
	.iconWarp .active{color:green;}
</style>