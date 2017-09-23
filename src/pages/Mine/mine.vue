<template>
	<div class="me">
		<child txt='我的'>
			<img src="../../assets/images/ic_chat_green.png" alt="" class="rightImg">
		</child>
		<img src='../../assets/images/xxx.jpg'>
	</div>

</template>
<style>
	.me>img{width:100%}
	.me {height:700px}
	
</style>
<script>
	 import child from '../../components/child'
	  export default{
	  	components:{
          child
        }

	  }

</script>