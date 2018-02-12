import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Form from '../../../components/plusMinusForm'
import { addCount, subtractCount} from '../actions'

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
)(Form)

export default SimpleContainer