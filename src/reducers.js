import {INCREMENT, DECREMENT} from './actions';

// step 1:describe the ideal/typical state
// {
//  count: 0
// }

const initialState = { count: 0 }

export const counter = (state=initialState, action) => {
  if(!action){
    return state;
  }
  switch(action.type) {
    case INCREMENT:
      // Add 1 to count
      return {
        count: state.count + 1
      }
      break;
    case DECREMENT:
      // Subtract 1 to count
      return {
        count: state.count - 1
      }
      break;
    default:
      return state;
  };
};

