export default {
  name: 'loading',
  props: [ 'flag' ],
  template: `
    <div v-loading="!this.flag" v-show="!this.flag" style="width:100%;height:100px"></div>
  `
}
