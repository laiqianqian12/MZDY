<template>
  <transition name='slideNav'>
    <div id="mz_menu" v-show='isNavShow'>
      <ul @touchstart='hideNav'>
        <router-link to='/index' tag='li'>首页<i class="iconfont icon-moreunfold"></i></router-link>
        <router-link to='/film' tag='li'>影片<i class="iconfont icon-moreunfold"></i></router-link>
        <router-link to='/index' tag='li'>影院<i class="iconfont icon-moreunfold"></i></router-link>
        <router-link to='/index' tag='li'>商城<i class="iconfont icon-moreunfold"></i></router-link>
        <router-link to='/index' tag='li'>我的<i class="iconfont icon-moreunfold"></i></router-link>
        <router-link to='/index' tag='li'>卖座卡<i class="iconfont icon-moreunfold"></i></router-link>
      </ul>
    </div>
  </transition>
  </template>
  
  <script>
    import { mapState } from 'vuex'
  export default {
    name: 'Nav',
    computed:{
      ...mapState(['isNavShow'])
    },
    methods:{
      hideNav(){
        this.$store.commit('Change')
      }
    }
  }
  </script>
  
  <style scoped>
     #mz_menu{ width: 265px;
             height: 100%;
              background: #282828;
               color:#999999;
                position: fixed; left: 0; top:50px;
                z-index:10;}
        #mz_menu li{ line-height: 50px; 
            height: 50px; 
            border-bottom: 1px dashed #333333; 
            padding-left: 10px; }
        #mz_menu li i{ float:right; 
        padding-right: 10px; }

    .slideNav-enter-active{
      animation: 0.5s moveNav linear
    }
    .slideNav-leave-active{
      animation: 0.5s moveNav linear reverse
    }
    @keyframes moveNav{
      0%{opacity: 0;transform: translateX(-100%) }
      100%{opacity: 1;transform: translateX(0px)}
    }
  </style>
  