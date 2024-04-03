// reducers.ts

import { combineReducers } from 'redux';

interface CounterState {
  count: number;
}

const initialCounterState: CounterState = {
  count: 0,
};

const counterReducer = (state = initialCounterState, action: any) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'SQUARE':
      return { ...state, count: state.count ** 2 }; // Bình phương biến đếm
    case 'RESET':
      return { ...state, count: 0 }; // Reset biến đếm về 0
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
