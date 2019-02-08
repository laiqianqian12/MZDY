<template>
    <div>
        <Header></Header>
        <Nav></Nav>
        <!-- <Detail></Detail> -->
        <router-view></router-view>
    </div>

</template>
<script>
    import '@/assets/iconfont/iconfont.css'
    import '@/assets/lib/swiper.min.css'

    import '@/assets/lib/swiper.min.js';

    console.log(this)
    import Header from '@/components/header'
    import Nav from '@/components/nav'
    import Detail from '@/components/detail'
export default {    
    name: 'mz-film',
    components:{
        Header,
        Nav,
        Detail
    }
}
</script>

<style>
    *{margin: 0;padding: 0}
      html,body{height:100%;width:100%;background: #f3eef3} 
      li{list-style:none}
      img{display:block}
</style>
