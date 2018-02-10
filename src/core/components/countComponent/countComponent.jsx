import { connect } from 'react-redux'
import { Form } from '../../../common/containers/form'

//action-creator/reducer
const ADD_COUNT = 'ADD_COUNT';
const addCount = (currentCount) => {
    return {
        'type': ADD_COUNT,
        'count': currentCount + 1
    }
};

export const countComponentReducer = (state = { count: 0}, action) => {
    if (action.type === ADD_COUNT) {
        var newState = Object.assign({}, state, { count: action.count });
        console.log(newState);
        return newState;
    }
    else return state;
}

//component
const mapStateToProps = state => { 
    return {
        count: state.count || 0
    }
};

const mapDispatchToProps = dispatch => {
    return {
      onSubmit: (e, count) => {
        e.preventDefault();
        dispatch(addCount(count));
      }
    }
  }

export const CountComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)

export default CountComponent