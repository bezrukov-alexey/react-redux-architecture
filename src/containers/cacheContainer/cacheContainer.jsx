import React from 'react'
import dotnetify from 'dotnetify'

export default class CacheContainer extends React.Component {
    constructor() {
        super();
        dotnetify.hubServerUrl = "http://localhost:5000"; 
        this.vm = dotnetify.react.connect("HelloWorld", this);
        this.state = {};
        this.dispatchState = state => this.vm.$dispatch(state);  
    }

    componentWillUnmount = () => this.vm.$destroy()

    render = () => 
        <div>
            Server time is: {this.state.ServerTime}
        </div>
}
 