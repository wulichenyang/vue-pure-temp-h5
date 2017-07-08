import Vue from 'vue';
import Vuex from 'vuex';

import logger from 'store/plugins/logger.js';

import sideBar from 'store/modules/sideBar';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    sideBar,
  },
  plugins: process.env.NODE_ENV !== 'production' ? [ logger ] : []
});
