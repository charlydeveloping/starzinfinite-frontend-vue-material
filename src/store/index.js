import Vue from 'vue'
import Vuex from 'vuex'

import setting from './admin/setting'
import user from './admin/user'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        setting,
        user
    }
})