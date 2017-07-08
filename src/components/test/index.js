import RenderComponent from './RenderComponent.js';
import TemplateComponent from './TemplateComponent.js';
import DemoComponent from './DemoComponent.js';
import VComponent from './VComponent.vue';

export default {
  data() {
    return {
      msg1: 'msg1',
    }
  },
  computed: {
    msg2() {
      return 'msg2';
    }
  },
  render(h) {
    return (
      <div>
        <h1>demo component</h1>
        <DemoComponent/>
        <h1>from data</h1>
        <p>{this.msg1}</p>
        <p>{this.msg2}</p>
        <h1>from render component</h1>
        <RenderComponent/>
        <h1>from template component</h1>
        <TemplateComponent/>
        <h1>from vue component</h1>
        <VComponent/>
      </div>
    )
  },
  components: {
    RenderComponent,
    TemplateComponent,
    VComponent,
    DemoComponent
  }
}
