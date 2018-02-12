import { connect } from 'react-redux'
import Form from '../../../components/plusMinusForm'
import { addCount, subtractCount} from '../actions'

const mapStateToProps = state => { 
    return {
        count: state.changeCount.count
    }
};

const mapDispatchToProps = dispatch => {
    return {
      addCount: (event, count) => {
        dispatch(addCount(event, count));
      },
      subtractCount: (event, count) => {
        dispatch(subtractCount(event, count));
      }
    }
  }

export const SimpleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)

export default SimpleContainer