<template>
  <div class="homeWarp">
      <item txt='首页' :sel='selected' mark='home' @chang="getVal">
      <img src="../assets/images/ic_tab_home_normal.png" alt="" slot="normal"/>
      <img src="../assets/images/ic_tab_home_active.png" alt="" slot="active"/>
      </item>
      <item txt='书影音' :sel='selected' mark='broadcast/film' @chang="getVal">
      <img src="../assets/images/ic_tab_subject_normal.png" alt="" slot="normal"/>
      <img src="../assets/images/ic_tab_subject_active.png" alt="" slot="active"/>
      </item>
      <item txt='广播' :sel='selected' mark='Audio' @chang="getVal">
      <img src="../assets/images/ic_tab_status_normal.png" alt="" slot="normal"/>
      <img src="../assets/images/ic_tab_status_active.png" alt="" slot="active"/>
      </item>
      <item txt='小组' :sel='selected' mark='group' @chang="getVal">
      <img src="../assets/images/ic_tab_group_normal.png" alt="" slot="normal"/>
      <img src="../assets/images/ic_tab_group_active.png" alt="" slot="active"/>
      </item>
      <item txt='我的' :sel='selected' mark='mine' @chang="getVal">
      <img src="../assets/images/ic_tab_profile_female_normal.png" alt="" slot="normal"/>
      <img src="../assets/images/ic_tab_profile_female_active.png" alt="" slot="active"/>
      </item>
  </div>
</template>

<script>
  import item from './item'
    export default{
        data:function(){
          return{
            selected:'home'
          }
        },
        methods:{
            getVal:function(val){
              this.selected=val 
            }

        },
        components:{
          item
        }


    }


</script>

<style>
*{margin:0;padding:0;}
  .homeWarp{width:100%;height:64px;position:fixed;bottom:0;left:0;border-top:1px solid #999;z-index:3;background:#fff}

</style>
