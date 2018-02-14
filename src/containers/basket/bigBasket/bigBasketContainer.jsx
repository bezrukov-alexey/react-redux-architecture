import React from 'react'
import { connect } from 'react-redux'
import BasketPresentier from './bigBasketPresentier'

export class BigBasketContainerComponent extends React.Component {

    render = () => 
        <BasketPresentier
            amount={this.props.amount}
            branchName={this.props.branchName}
            type={this.props.type}
            lines={this.props.lines}
            error={this.props.error}
        />
}

//-- Биндинги для Redux
const mapStateToProps = state => ({
    amount: state.basket.amount,
    branchName: state.basket.branchName,
    type: state.basket.type,
    lines: state.basket.lines,
    error: state.basket.error
})

export default connect(mapStateToProps)(BigBasketContainerComponent)
