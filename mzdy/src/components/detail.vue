<template>
    <div id="mz_detail">
        <div class="banner"><img :src="data.image"></div>
        <div class="info">
          <h2>{{data.titleCn}}</h2>
          <dl>
            <dt>导&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp演：</dt>
            <dd v-for='item in data.directors'>{{item}}</dd>
          </dl>
          <dl>
            <dt>主&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp演：</dt>
            <dd v-for='item in data.actors'>{{item}}</dd>
          </dl>
          <dl>
            <dt>时长：</dt>
            <dd>{{data.runTime}}</dd>
          </dl>
          <dl>
            <dt>类&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp型：</dt>
            <dd v-for='item in data.type'>{{item+'/'}}</dd>
          </dl>
          <dl>
            <dt>上映日期：</dt>
            <dd>{{formatDate(data.showDay)}}</dd>
          </dl>
          <p>{{data.content}}</p>
        </div>
      </div>
  </template>
  
  <script>
    import axios from 'axios'
  export default {
    name: 'detail',
    data(){
      return{
          data:{actors:[],directors:[],type:[]}
      }
    },
    mounted(){
      axios.get('/Service/callback.mi/movie/Detail.api?movieId='+this.$route.params.id+'&locationId=290').then((res)=>{
        var status=res.status
        if(status==200){
          console.log(res)
          this.data=res.data
        }
      })
    },
    methods:{
      formatDate(n){ 
        var date = new Date();
        date.setTime(n)
        return (date.getMonth()+1)+'月'+date.getDay()+'日'
      }
    }
  }
  </script>
  
  <style scoped>
    #mz_detail{ margin-top:50px; }
	#mz_detail .banner{ width: 100%; }
	#mz_detail .banner img{ width: 100%; }
	#mz_detail .info{ margin-top: 16px; font-size: 12px; }
	#mz_detail .info h2{ height: 24px; line-height: 24px; border-left:16px #e4c89c solid; font-size: 16px; padding-left: 4px; font-weight: 100; }
	#mz_detail .info dl{ overflow: hidden; line-height: 27px; margin-top: 10px; padding:0 10px; box-sizing:border-box; display: flex; }
	#mz_detail .info dt{ width:80px; }
	#mz_detail .info dd{ flex:1; overflow:hidden; white-space: nowrap; text-overflow:ellipsis;}
	#mz_detail .info p{ padding:0 10px; box-sizing:border-box; line-height: 20px; margin-top: 10px; }
  </style>
  