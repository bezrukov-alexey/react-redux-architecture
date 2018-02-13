import { connect } from 'react-redux'
import React from 'react';
import { bindActionCreators } from 'redux'
import { divideCountByTwo, multiplicationCountByTwo } from '../actions';
import ImprovedPresenter from './improvedPresenter'

/**
 * Компонент, который уже имеет логику, но все еще не привязан к Redux Store
 * Экспортится для последующего тестирования. Вне тестов не используется,
 * а используется уже компонент, подключенный к Store.
 */
export class ImprovedContainerComponent extends React.Component {

  multipleClickHandler = e => this.props.multiplicateCountByTwo(e, this.props.count)

  divideClickHandler = e => this.props.divideCountByTwo(e, this.props.count)

  render = () =>
    <ImprovedPresenter
      count={this.props.count}
      divideCount={this.divideClickHandler}
      multipleCount={this.multipleClickHandler}
    />  
};

//-- Биндинги для Redux
const mapStateToProps = state => {
  return {
    count: state.changeCount.count
  }
};

const mapDispatchToProps = dispatch => {
  return {
    multiplicateCountByTwo: bindActionCreators(multiplicationCountByTwo, dispatch),
    divideCountByTwo: bindActionCreators(divideCountByTwo, dispatch)
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImprovedContainerComponent);
