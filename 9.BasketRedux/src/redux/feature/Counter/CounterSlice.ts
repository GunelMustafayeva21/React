import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {ICount} from './types'

let initialState:ICount={
    count:0
}
export const Counter = createSlice({
    name:'Counter',
    initialState,
    reducers:{
        increment:(state:ICount, action:PayloadAction<number>)=>{
            state.count=state.count+action.payload
        },
        decrement:(state:ICount, action:PayloadAction<number>)=>{
            state.count=state.count-action.payload
        },
        reset: ()=>initialState
    }
})

export const { increment, decrement, reset} = Counter.actions
export default Counter.reducer