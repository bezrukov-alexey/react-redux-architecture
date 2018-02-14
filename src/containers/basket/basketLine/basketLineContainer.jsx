import React from 'react'
import BasketLinePresentier from './basketLinePresentier'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateBasketLineQuanity } from '../actions'

export class BasketLineComponentContainer extends React.Component {

    onChangeQuanityHandler = e => 
        this.props.updateBasketLineQuanity(this.props.line.id, e.target.value)

    render = () => 
        <BasketLinePresentier
            line={this.props.line}
            onChangeQuanity={this.onChangeQuanityHandler}
        />
}

// Биндинги для Redux
const mapDispatchToProps = dispatch => ({
    updateBasketLineQuanity: bindActionCreators(updateBasketLineQuanity, dispatch)
})

export default connect(null, mapDispatchToProps)(BasketLineComponentContainer)
