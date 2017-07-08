export default {
  name: 'demo-component',
  data() {
    return {
      number: 123,
      inputValue: '...'
    }
  },
  methods: {
    log(msg = '123') {
      console.log(msg)
    },
    inputChange(e) {
      console.log(e.target.value)
      this.inputValue = e.target.value;
    }
  },
  computed: {
    displayValue() {
      return this.inputValue.trim();
    }
  },
  render(h) {
    return (
      <div class="test">
        <img src="images/test/logo.png"/>
        <h5>use scss file</h5>
        <button class="btn btn-danger" onClick={() => { this.log(this.number) }}>
          button
        </button>
        <br/>
        <input value={this.displayValue} onChange={this.inputChange} />
        {this.displayValue}
      </div>
    )
  }
}
