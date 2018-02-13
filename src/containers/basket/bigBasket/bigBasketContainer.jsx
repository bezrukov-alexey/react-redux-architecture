import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadBasket } from '../actions'
import BasketPresentier from './bigBasketPresentier'

export class BigBasketContainerComponent extends React.Component {

    componentDidMount() {
        
    }

    render = () => 
        <BasketPresentier
            amount={this.props.amount}
            branchName={this.props.branchName}
            type={this.props.type}
            lines={this.props.lines}
        />
}

//-- Биндинги для Redux
const mapStateToProps = state => ({
    amount: state.basket.amount,
    branchName: state.basket.branchName,
    type: state.basket.type,
    lines: state.basket.lines
})

const mapDispatchToProps = dispatch => ({
    loadBasket: bindActionCreators(loadBasket, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(BigBasketContainerComponent)