import { createSlice, PayloadAction, Reducer } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';

export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
} satisfies CounterState as CounterState

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    multiply: {
      reducer: (state, action: PayloadAction<number>) => {
        state.value = state.value * action.payload
      },
      prepare: (amount: number) => (
        {payload: amount || 2}
      )
    },
    
    reset: (state) => {
      state.value = 0
    }
  },
})
const rootReducer = combineReducers({
  counter: counterSlice,
});
// Action creators are generated for each case reducer function
export const { increment, decrement, multiply, reset } = counterSlice.actions

export default rootReducer