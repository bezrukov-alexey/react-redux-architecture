import React from 'react'
import Button from '../../components/button'

export default class Form extends React.Component {
    render = () => 
    <div>
        <form onSubmit={e =>  this.props.onSubmit(e, this.props.count)}>
            <Button count={this.props.count} type="submit"/>
        </form>
    </div>
}