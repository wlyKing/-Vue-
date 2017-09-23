<template>
<div class="filmWarp">

	<flima txt1='海边的曼彻' txt2='星际特工'  txt3='皮绳上的魂'  txt4='心理罪' hot='影院热映' txt5='鲛珠传' txt6='侠盗联盟'>
	<img src='../../assets/images/film-1.jpg' slot='slot1'>
	<img src='../../assets/images/film02.jpg' slot='slot2'>
	<img src='../../assets/images/film03.jpg' slot='slot3'>
	<img src='../../assets/images/film04.jpg' slot='slot4'>
	<img src='../../assets/images/film05.jpg' slot='slot6'>
	<img src='../../assets/images/film06.jpg' slot='slot7'>
	<img src='../../assets/images/3_03.jpg' class='xin' >
	</flima>
	<div class='mid'>
		<img src='../../assets/images/film0.jpg' >
		<h3>这是一封写给年轻人的信——极盗车神观影报告</h3>
	</div>
		
<flima txt1='杀破狼-贪狼' txt2='侠盗联盟'  txt3='汽车总动员'  txt4='美国队长'  hot='即将上映' txt5='心理罪' txt6='皮绳上的魂'>
	<img src='../../assets/images/film07.jpg' slot='slot1'>
	<img src='../../assets/images/film06.jpg' slot='slot2'>
	<img src='../../assets/images/film08.jpg' slot='slot3'>
	<img src='../../assets/images/film01.jpg' slot='slot4'>
	<img src='../../assets/images/film04.jpg' slot='slot6'>
	<img src='../../assets/images/film03.jpg' slot='slot7'>
	<img src='../../assets/images/3_03.jpg' class='xin' slot='slot5'>
	</flima>
	
	
</div>
</template>
<style>
	.filmWarp{height:750px}
	
</style>
<script>
	
	import flima from './flima'
	 	
	
	  export default{
	  	components:{
       		flima
        }
	  }


</script>