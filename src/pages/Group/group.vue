<template>
	<div class='gronpwarp'>
		<child txt='小组'>
			<img src="../../assets/images/ic_chat_green.png" alt="" class="rightImg">
		</child>
		<img src="../../assets/images/1_02.jpg" alt="" class='ep'>
		<span></span>
		<p>影视</p>
		<grounpc h='这里是新疆 / 新疆沙圈' p='不到新疆，不知道中国之大！不到天池，不知传说之美' sun='10998'>
		<img src='../../assets/images/group_03.jpg' slot='tu'>
		<img src='../../assets/images/ic_group_check_anonymous.png' slot='dian' @click='fn'>
		</grounpc>

		<grounpc h='出国自助游教室' p='出国自助游教室成立于2007年，是国内最早进行线上' sun='19998'>
		<img src='../../assets/images/group_06.jpg' slot='tu'>
		<img src='../../assets/images/ic_group_check_anonymous.png' slot='dian' @click='fn'>
		</grounpc>

		<grounpc h='这里是新疆 / 新疆沙圈' p='不到新疆，不知道中国之大！不到天池，不知传说之美' sun='10998'>
		<img src='../../assets/images/group_08.jpg' slot='tu'>
		<img src='../../assets/images/ic_group_check_anonymous.png' slot='dian' @click='fn'>
		</grounpc>

		<div class='dian'>
			<p :class="{active:bol}">选好了，去玩小组</p>
		</div>

	</div>

</template>
<script>
	 import child from '../../components/child'
	 import grounpc from './groupchild'
	  export default{
	  	components:{
          child,
          grounpc
        },
        data:function(){
        	return{
        		bol:false
        	}
        },
        methods:{
        	fn:function(){
        	if(this.bol!=true){
        		this.bol=true;

        	}else if(this.bol!=false){
        		this.bol=false;


        	}
}
        }

	  }

</script>
<style>
.gronpwarp{height:750px}
	.gronpwarp .ep{width:100%;}
	.gronpwarp>span{width:90%;height:2px;background:#d4d4d4;display:block;margin:30px auto}
	.gronpwarp>p{position: absolute;top:313px;left:155px;width:50px;height:30px;line-height:30px;text-align:center;background:#fff;font-size:20px;font-weight: bold;font-family:'宋体';color:#515151}

	.dian{height:50px;width:100%;border-top:5px solid #eee}
	.dian>p{width:180px;height:30px;line-height:30px;text-align:center;background:#aaa;font-size:14px;font-weight: bold;font-family:'宋体';color:#fff;float:right;margin:15px}
	.dian .active{background:green}

</style>

