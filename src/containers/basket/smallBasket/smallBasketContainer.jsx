import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { loadBasket } from '../actions'
import BasketPresentier from './smallBasketPresentier'

export class SmallBasketContainerComponent extends React.Component {

    basketClick = () => {
        this.props.history.push('/BasketPage')
    }

    componentDidMount = () => {
        this.props.loadBasket();
    }

    render = () => 
        <BasketPresentier
            amount={this.props.amount}
            onClick={this.basketClick}
        />
}

//-- Биндинги для Redux
const mapStateToProps = state => ({
    amount: state.basket.amount
});

const mapDispatchToProps = dispatch => ({
    loadBasket: bindActionCreators(loadBasket, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SmallBasketContainerComponent))
