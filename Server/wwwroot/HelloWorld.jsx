class HelloWorld extends React.Component {
    constructor() {
       super();
       this.vm = dotnetify.react.connect("HelloWorld", this);
       this.state = {};

      // Set up function to dispatch state to the back-end.
      this.dispatchState = state => this.vm.$dispatch(state);  
    }

    // handleChange(e) {
    //   // this.setState((prev, props) => ({
    //   //   Greetings: e.target.value
    //   // }))
    //   console.log('dispatching', e.target.value);
      
    //   this.dispatchState ({
    //     Greetings: e.target.value
    //   })
    // }
    componentWillUnmount() {
      this.vm.$destroy();
    }
    render() {
      const handleChange = e => {
        this.dispatchState({ Greetings: e.target.value});
        console.log('dispatching', e.target.value);
      }

       return (
          <div>
             {this.state.Greetings}<br />
             Server time is: {this.state.ServerTime}
             <div><input type="text" value={this.state.Greetings} onChange={handleChange}/> </div>
          </div>
       );
    }
 }
 
 ReactDOM.render(
   <HelloWorld />,
   document.getElementById('Content')
 );