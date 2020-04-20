import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        menu: [],
        menuClick: [],
    },
    mutations: {
        GET_MENU (state, data) {
          state.menu = data
        },
    },

    actions: {
        getApi (context) {
          Axios.get('http://localhost:3700/kafe/v1/menu')
            .then(res => {
              context.commit('GET_MENU', res.data)
            })
        }
      },
      modules: {
      },
})