import React from 'react'
import Button from '../../../components/button'

const SimplePresenter = props => (
    <div>
        <label>{props.count}</label>
        <Button buttonText={"Add"} onClick={props.addCount}/>
        <Button buttonText={"Del"} onClick={props.subtractCount}/>
    </div>
)

export default SimplePresenter

{/* <Form props={{
      count: this.props.count, 
      buttonTextOne: "Add",
      onClickOne: this.props.addCount,
      buttonTextTwo: "Subtract",
      onClickTwo: this.props.subtractCount
    }}/> */}