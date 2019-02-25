import Vue from 'vue'
import Vuex from 'vuex'
import movielist from './movielist'
import moviedetail from './moviedetail'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        movielist,
        moviedetail
    }
})

export default store