import React from 'react'
import Button from '../button'


export default class Form extends React.Component {

    onClickAddCount = (e) => this.props.addCount(e, this.props.count)

    onClickSubtractCount = (e) => this.props.subtractCount(e, this.props.count)

    render = () => 
    <div>
        <label>{this.props.count}</label>
        <Button buttonText={"AddCount"} onClick={this.onClickAddCount}/>
        <Button buttonText={"SubtractCount"} onClick={this.onClickSubtractCount}/>
    </div>
}