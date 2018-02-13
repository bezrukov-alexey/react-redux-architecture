import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCount, subtractCount} from '../actions';
import SimplePresenter from './simplePresenter';

/**
 * Компонент, который уже имеет логику, но все еще не привязан к Redux Store
 * Экспортится для последующего тестирования. Вне тестов не используется,
 * а используется уже компонент, подключенный к Store.
 */
export class SimpleContainerComponent extends React.Component {
  componentDidMount = () => {

  }

  addCountHandler = e => this.props.addCount(e, this.props.count)

  subtractCountHandler = e => this.props.subtractCount(e, this.props.count)

  render = () => 
    <SimplePresenter 
      addCount = {this.addCountHandler}
      subtractCount = {this.subtractCountHandler}
      count = {this.props.count}
    />  
}

//-- Биндинги для Redux
const mapStateToProps = state => ({ 
  count: state.changeCount.count  
});

const mapDispatchToProps = dispatch => ({
  addCount: bindActionCreators(addCount, dispatch),
  subtractCount: bindActionCreators(subtractCount, dispatch) 
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpleContainerComponent);

