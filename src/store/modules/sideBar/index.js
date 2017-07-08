import Vue from 'vue';
import window from 'window';

import { sideBar } from 'store/mutation-type.js';
import getters from 'store/modules/sideBar/getters.js';
// import { api } from 'api/temp.js';

const state = {
  openSideBar: false,
  docked: true,
};

const actions = {

};
const mutations = {
  [sideBar.toggleSideBar]: (state, flag) => {
    state.openSideBar = !state.openSideBar;
    state.docked = !flag;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
