<template>
      <div class="list">
          <ul>
            <li v-for='item in ms'>
              <div class="img"><img :src="item.img"></div>
              <div class="info">
                <p><span>{{item.t}}</span><span>{{item.r}}<i class="iconfont icon-moreunfold"></i></span></p>
                <p>{{item.commonSpecial}}</p>
                <p><span>类型：{{item.movieType}}</span></p>
                <p><span> 导演：{{item.dN}}</span></p>
              </div>
            </li>
          </ul>
        </div>
    </template>
    
    <script>
    import axios from 'axios'
    export default {
      name: 'nowPlaying',
      data(){
      return{
        ms:[]
      }
    },
      mounted(){
        axios.get('/Service/callback.mi/Showtime/LocationMovies.api?locationId=290').then((res)=>{
         var status=res.status;
         if(status==200){
            this.ms=res.data.ms
         }
        })
        
      }
    }
    </script>
    
    <style scoped>
     
    </style>
    