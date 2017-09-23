<template>
	<body>
	<div class="audioWrap">
		<child txt='广播'>
			
			<img src="../../assets/images/ic_chat_green.png" alt="" class="rightImg">
		</child>
		<div class="bac"><img src="../../assets/images/cit.jpg" alt=""></div>
		
		<div class="show" mark='0'>
			<div class="left">
			<img src="../../assets/images/cat.jpg" alt="" class="portrait">

			</div>
			<div class="rightw">
					<h4>小丸子</h4>
					<span>{{sumber}}关注</span>
					<p><a href="home">【大爷给清华新生拉行李：考上不容易】近日，北京@清华大学 开学，30多位大爷骑三轮车为新生免费拉行李。这是因为一来新生行李多，二来他们不熟悉学校。他们平均年龄60岁以上，平时在清华收废品</a></p>
					<div class="like">
						<img src="../../assets/images/ic_like_full.png" alt="" class="full">
						<p @click='nu'>{{num}}</p>
						<img src="../../assets/images/ic_feedback_comment.png" alt="" class="comment" >
						<span @click='su'>{{sun}}</span>
						<button :class={activ:bol} @click='fn'>{{tex}}</button>
					</div>			
			</div>
		</div>	

		<div class="show hiid">
			<div class="left">
			<img src="../../assets/images/tat.jpg" alt="" class="portrait">

			</div>
			<div class="rightw">
					<h4>云朵</h4>
					<span>{{number}}关注</span>
					<p><a href="home">狗爸爸每天都会去咖啡店门口等着，别人给的食物只要是能带走的它一般都不舍得吃，衔起来就匆匆离去。大家发现它留着食物是为了养育宝宝后，决定让它们不再漂泊，帮着找个家 #一日一食一记##厨房的诱惑# ​</a></p>
					<div class="like">
						<img src="../../assets/images/ic_like_full.png" alt="" class="full">
						<p @click='nu'>{{te}}</p>
						<img src="../../assets/images/ic_feedback_comment.png" alt="" class="comment" >
						<span @click='su'>{{ke}}</span>
						<button :class={activ:bol} @click='fn' bol='false'>{{tex}}</button>
					</div>			
			</div>
		</div>	
		<div class='dian'>
			<p :class="{active:bol}">选好了，去玩小组</p>
		</div>
	</div>
	</body>
</template>
<style>
   
	body{width:100%;background:#f7f7f7}
	.audioWrap{height:900px;width:100%;}
	.bac img{width:100%}
	.show{width:90%;background:#fff;height:300px;margin:0 auto;border-radius:8px;box-shadow:0 0 10px #ccc}
	.hiid{margin-top:20px}
	.show .left{width:25%;float:left}
	.show .left .portrait{width:55px;height:55px;border-radius:50%;margin:20px}
	.show .rightw{width:75%;float:right;}
	.show .rightw h4{margin:30px 0 0 10px}
	.show .rightw span{font-size:12px;color:#acacac;margin-left:10px}
	.show .rightw p{font-weight: normal;margin:10px 20px 0 5px;line-height:22px}
	.show .rightw .like {position: relative;height:20px;width:75px;}
	.show .rightw .like .full{width:18px; padding-rightw:20px;position:absolute;position:absolute;top:20px;left:4px}
	.show .rightw .like .comment{width:22px;position:absolute;top:22px;left:60px;}
	.show .rightw .like p{position:absolute;top:10px;left:20px;color:#acacac;font-size:12px}
	.show .rightw .like span{position:absolute;top:23px;left:76px;color:#acacac;font-size:12px}
	.show .rightw .like button{background:#42c055;color:#fff;width:70px;height:25px;line-height:25px;position:absolute;top:-200px;left:160px; border:0px none}
	.show .rightw .like .activ{background:#999}
	
	.dian{height:70px;width:100%;border-top:5px solid #eee;background:#fff}
	.dian>p{width:180px;height:30px;line-height:30px;text-align:center;background:#fff;font-size:14px;font-weight: bold;font-family:'宋体';color:#fff;float:right;margin:15px}
	.dian .active{background:green}
</style>
<script>
	 import child from '../../components/child'
	  export default{
	  	components:{
          child
        },
        data:function(){
        	return{
        		bol:false,
        		num:50,
        		sun:29,
        		tex:'关注',
        		ke:21,
        		te:12,
        		number:55324000,
        		sumber:4428,
        	

        	}
        },
         methods:{
         	nu:function(){
         		this.num++
         		this.te++
         		  						
         	},
         	su:function(){
         		this.sun++
				this.ke++

         	},
        	fn:function(){
        	if(this.bol!=true){
        		this.bol=true;
        		this.tex='已关注'
        		this.number++
        		this.sumber++
        	}else if(this.bol!=false){
        		this.tex='关注'
        		this.bol=false;
        		this.number--;
        		this.sumber--

        	}
        	}
        }	

	  }

</script>