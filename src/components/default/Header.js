import template from 'template/default/header.html';
import $ from 'jQuery';
import Vue from 'vue';
import bus from 'components/vendor/bus.js';
import { mapState } from 'vuex';
import { mapMutations } from 'vuex';
import { sideBar } from 'store/mutation-type.js';

export default {
  name: 'header',
  template,
  data() {
    return {
      
    }
  },
  computed: {
    ...mapState({
      openSideBar: state => state.sideBar.openSideBar,
      docked: state => state.sideBar.docked,
    })
  },
  methods: {
    ...mapMutations({
      toggleSideBar: sideBar.toggleSideBar,
    }),
  },
  components: {  }
};
