import Vue from 'vue'
import Router from 'vue-router'
import MzFilm from '@/components/mz-film'
import MzIndex from '@/components/index'
import Mzfilm from '@/components/film'
import nowPlaying from '@/components/nowPlaying'
import comingSoon from '@/components/comingSoon'
import Detail from '@/components/detail'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/index',
      name: 'MzIndex',
      component: MzIndex
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/film',
      name: 'Mzfilm',
      component: Mzfilm,
      children:
        [
          {
            path: 'nowPlaying',
            name: 'nowPlaying',
            component: nowPlaying
          },
          {
            path: 'comingSoon',
            name: 'comingSoon',
            component: comingSoon
          },
          {
            path:'/film',
            redirect:{name:'nowPlaying'}
          }
        ]
      
    },
    {
      path:'/*',
      redirect:{name:'MzIndex'}
    }
  ]
})
