<template>
  <div id="app">
  	<tabble></tabble>
    <router-view></router-view>
  </div>
</template>



<script>
	import tabble from './components/tabble'
export default {
  name: 'app',
  components:{
          tabble
        },
  beforeCreate:function(){
			this.$router.push('/home')

		}      
 
}
</script>
<style>
  a{color:#999;text-decoration: none}

</style>

