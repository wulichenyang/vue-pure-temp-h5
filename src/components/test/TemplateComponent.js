import Vue from 'vue';
import template from './template.html';
import RenderComponent from './RenderComponent';

export default {
  data() {
    return {
      msg: 'A component'
    }
  },
  computed: {
    display() {
      return `${this.msg} built by template`;
    }
  },
  template
}
