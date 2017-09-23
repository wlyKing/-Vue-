
<template>
<div class="banner">
	<div class='swiper-container' :class='swiperid'>
		<div class="swiper-wrapper">
			<slot name="swiper-con"></slot>
		</div>
		<div :class='{"swiper-pagination": paginationshow}' :style='{"text-align": paginationdesition}'></div>
	</div>
</div>
</template>
<style>
@import '../../assets/libs/css/swiper.css';
.banner{width:100%;height:128px;overflow: hidden;}
.swiper-pagination-bullet-active {background: white;}
</style>
<script>
	import '../../assets/libs/js/swiper.js'
	export default {
	props: {
		swiperid: {
			type: String,
			default: ''
		},
		autoplay: {
			type: Number,
			default: 1000
		},
		paginationshow: {
			type: Boolean,
			default: true
		},
		paginationdesition: {
			type: String,
			default: 'center'
		},
		effect: {
			type: String,
			default: 'slide'
		},
		paginationtype: {
			type: String,
			default: 'bullets'
		},
		loop: {
			type: Boolean,
			default: true
		},
		direction: {
			type: String,
			default: 'horizontal'
		}
	},
	mounted: function(){
		var That = this;
		new Swiper('.'+That.swiperid,{
			direction: That.direction,
			loop: That.loop,
			pagination: '.swiper-pagination',
			paginationType: That.paginationtype,
			autoplay: That.autoplay,
			effect: That.effect
		});
	}
}
</script>
