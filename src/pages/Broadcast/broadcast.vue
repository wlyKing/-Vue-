<template>
	<div class="broWarp">
		<child txt='书影音'>
			
			<img src="../../assets/images/ic_chat_green.png" alt="" class="rightImg">
		</child>
		<broad></broad>	
	
	</div>
</template>
<style>
	

</style>
<script>
	 import child from '../../components/child'
	 import broad from './broadchild'
	 
	
	  export default{
		beforeCreate:function(){
			this.$router.push('/broadcast/film')
		},	
	  	components:{
          child,
          broad
     

        }

	  }

</script>