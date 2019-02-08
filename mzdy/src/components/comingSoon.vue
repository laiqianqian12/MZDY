<template>
    <div class="list">
        <ul>
          <li v-for='item in attention'>
            <div class="img"><img :src="item.image"></div>
            <div class="info">
              <p><span>{{item.title}}</span><span>{{item.wantedCount}}人想看 <i class="iconfont icon-moreunfold"></i></span></p>
              <p><span>类型：{{item.type}}</span></p>
              <p><span>导演：{{item.director}}</span></p>
              <p>上映日期：{{item.releaseDate}}</p>
            </div>
          </li>
        </ul>
      </div>
  </template>
  
  <script>
  import axios from 'axios'
  export default {
    name: 'comingSoon',
    data(){
      return{
        attention:[]
      }
    },
      mounted(){
        axios.get('/Service/callback.mi/Movie/MovieComingNew.api?locationId=290').then((res)=>{
         var status=res.status;
         if(status==200){
            this.attention=res.data.attention
         }
        })
        
      }
  }
  </script>
  
  <style scoped>
   
  </style>
  