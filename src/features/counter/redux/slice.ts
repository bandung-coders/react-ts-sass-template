// Redux toolkit
import { createSlice } from '@reduxjs/toolkit'

// Interfaces
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/features/app/redux/store'
import { type CounterState } from './interface'

// Define the initial state using that type
const initialState: CounterState = {
  value: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    }
  }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState): void => state.counter.value

export default counterSlice.reducer
