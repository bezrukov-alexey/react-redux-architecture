import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addCount, subtractCount} from '../actions'
import SimplePresenter from './simplePresenter'

class SimpleContainerComponent extends React.Component {
  componentDidMount = () => {

  }

  render = () => (
    
    <SimplePresenter props={this.props}/>
  )
}

const mapStateToProps = state => { 
    return {
        count: state.changeCount.count
    }
};

const mapDispatchToProps = dispatch => {
  return { 
    addCount: bindActionCreators(addCount, dispatch), 
    subtractCount: bindActionCreators(subtractCount, dispatch) 
  }
}

export const SimpleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpleContainerComponent)
