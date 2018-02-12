import { connect } from 'react-redux'
import Form from '../../components/form'
import { addCount, subtractCount} from './actions'

const mapStateToProps = state => { 
    console.log(state);
    return {
        count: state.changeCount.count
    }
};

const mapDispatchToProps = dispatch => {
    return {
      addCount: (count) => {
        dispatch(addCount(count));
      },
      subtractCount: (count) => {
        dispatch(subtractCount(count));
      }
    }
  }

export const CountComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)

export default CountComponent