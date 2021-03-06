import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import menu from './modules/menu'

import getters from './getter'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        app,
        menu
    },
    getters
})

export default store
