import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadBasket } from './actions';
import BasketPresentier from './basketPresentier';

export class BasketContainerComponent extends React.Component {

    componentDidMount = () => {
        this.props.loadBasket();
    }

    render = () => 
        <BasketPresentier
            id={this.props.id}
        />
}

//-- Биндинги для Redux
const mapStateToProps = state => ({
    id: state.basket.id
});

const mapDispatchToProps = dispatch => ({
    loadBasket: bindActionCreators(loadBasket, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(BasketContainerComponent);