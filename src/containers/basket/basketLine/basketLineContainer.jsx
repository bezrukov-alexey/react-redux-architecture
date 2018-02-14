import React from 'react'
import BasketLinePresentier from './basketLinePresentier'

export default class BasketLineComponent extends React.Component {

    componentDidMount() {
        
    }

    onChangeQuanityHandler(e, value) {
        console.log('a')
    }

    render = () => 
        <BasketLinePresentier
            line = {this.props.line}
            onChangeQuanity = {this.onChangeQuanityHandler}
        />
}
