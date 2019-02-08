<template>
    <div id="mz_banner" class="swiper-container">
      <ul class="swiper-wrapper">
          <li class="swiper-slide" v-for='item in category'><img :src="item.image"></li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  import Swiper from 'swiper'
 // import * as Swiper from '@/assets/lib/swiper.min.js'

  console.log(Swiper.Swiper)
  export default {
    name: 'banner',
    data(){
      return{
        category:[]
      }
    },
    mounted(){
      axios.get('/Service/callback.mi/PageSubArea/MarketFirstPageNew.api').then((res)=>{
        var status=res.status;
        if(status==200){
            this.category=res.data.category
            this.$nextTick(()=>{
               // new Swiper.Swiper("#mz_banner",{
                new Swiper("#mz_banner",{
                loop : true
            })  
      })  
        }
      })
                    
    }
  }
  </script>
  
  <style scoped>
    #mz_banner{ margin-top: 50px; 
            width: 100%; 
            overflow:hidden; }
    #mz_banner img{ width: 100%; }
  </style>
  