import {configureStore}  from "@reduxjs/toolkit"
import homeReducer from "./modules/homeReducer"

const store = configureStore({
    reducer:{
        home:homeReducer
    }
})

export default store