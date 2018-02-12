import { connect } from 'react-redux'
import Form from '../../../components/multipleDivideForm'
import { divideCountByTwo,multiplicationCountByTwo } from '../actions'

const mapStateToProps = state => { 
    return {
        count: state.changeCount.count
    }
};

const mapDispatchToProps = dispatch => {
    return {
      multiplicateCountByTwo: (event, count) => {
        dispatch(multiplicationCountByTwo(event, count));
      },
      divideCountByTwo: (event, count) => {
        dispatch(divideCountByTwo(event, count));
      },
    }
  }

export const ImprovedContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)

export default ImprovedContainer