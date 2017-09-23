<template id="s">
		<div class="searchWrap">
			<input type="text" :placeholder="msg">
			<img src="../../assets/images/ic_actionbar_search_icon.png" alt="" class='searchImg' @click='fn'>
			<img src="../../assets/images/ic_scan_gray.png" alt="" class="scanImg">
			<img src="../../assets/images/ic_chat_white.png" alt="" class="chatImg">
		</div>
</template>

<style>
		* {margin: 0; padding: 0;}
		.searchWrap {width: 100%; height: 44px; background: #42c055; position: relative;z-index:2}
		.searchWrap input {position: absolute; left: 5px; top: 7px; width: 85%; height: 30px; border-radius: 4px; border: none; text-indent: 2.5em;}
		.searchWrap img {position: absolute; width: 25px;}
		.searchWrap .searchImg {top: 10px; left: 10px;}
		.searchWrap .scanImg {top: 10px; right: 55px;}
		.searchWrap .chatImg {top: 10px; right: 15px;}
</style>

<script>
	export default{
		data: function () {
			return {
				msg: '影视 图书 唱片 小组等'
					}
			},
			methods:{
				fn:function(){
					this.msg='暂时搜索不到哦'
				}
			}

			
		}
</script>