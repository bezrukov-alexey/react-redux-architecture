import React from 'react'

export default class Button extends React.Component {
    render = () => 
        <button type={this.props.type}> AddCount = {this.props.count}</button>
}