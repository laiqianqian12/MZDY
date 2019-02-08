import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)


export default new Vuex.Store({
    state:{
        isNavShow:false
    },
    mutations:{
       Change(state){
           state.isNavShow=!state.isNavShow
       }
    }
})