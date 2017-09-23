import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import home from '../pages/Home/home'
import broadcast from '../pages/Broadcast/broadcast'
import group from '../pages/Group/group'
import audio from '../pages/Audio/audio'
import mine from '../pages/Mine/mine'

import Film from '../pages/Broadcast/film'
import Study from '../pages/Broadcast/study'
import Tv from '../pages/Broadcast/tv'
import Local from '../pages/Broadcast/local'
import Music from '../pages/Broadcast/music'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: home
    },
     {
      path: '/broadcast',
      name: 'Broadcast',
      component: broadcast,children:[
      {path:'film',component:Film},
      {path:'study',component:Study},
      {path:'tv',component:Tv},
      {path:'local',component:Local},
      {path:'music',component:Music}
      ]},
     {
      path: '/group',
      name: 'Group',
      component: group
    },
     {
      path: '/audio',
      name: 'Audio',
      component: audio
    },
    {
      path: '/mine',
      name: 'Mine',
      component: mine
    },
  ]
})
