import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    name:"lcf"
}

const homeReducer  = createSlice({
    name:"homeReducer",
    initialState,
    reducers:{
        changeName(state,{payload}) {
            state.name = payload
        }
    }
})
export default homeReducer.reducer
export const {changeName} = homeReducer.actions