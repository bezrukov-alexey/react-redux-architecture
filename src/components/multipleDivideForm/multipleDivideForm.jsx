import React from 'react'
import Button from '../button'


export default class Form extends React.Component {

    onClickMultipleBy2 = (e) => { this.props.multiplicateCountByTwo(e, this.props.count)}

    onClickDivideBy2 = (e) => this.props.divideCountByTwo(e, this.props.count)

    render = () => 
    <div>
        <label className={"current-value"}>{this.props.count}</label>
        <Button buttonText={"Multiple x2"} onClick={this.onClickMultipleBy2}/>
        <Button buttonText={"Divide by 2"} onClick={this.onClickDivideBy2}/>
    </div>
}