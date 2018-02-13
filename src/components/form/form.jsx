import React from 'react'
import Button from '../button'

const Form = props => (
    <div>
        <label>{props.count}</label>
        <Button buttonText={props.buttonTextOne} onClick={props.onClickOne}/>
        <Button buttonText={props.buttonTextTwo} onClick={props.onClickTwo}/>
    </div>
)

export default Form