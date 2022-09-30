import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { homeApi } from '@/services/homeData'
const {
    GetGoodPriceData,
    GetHomeHighScoreData,
    GetHomeDiscountData,
    GetHomeHotRecommendData,
    GetHomeLongforData } = homeApi

//性价比
export const homeGoodPriceAction = createAsyncThunk("homeGoodPrice", async () => {
    const res = await GetGoodPriceData()
    return res
})
//好评
export const homeHighScoreDataAction = createAsyncThunk("homeHighScore", async () => {
    const res = await GetHomeHighScoreData()
    return res
})

export const HomeDiscountDataAction = createAsyncThunk("homeDiscount", async () => {
    const res = await GetHomeDiscountData()
    return res
})

export const HomeHotRecommendDataAction = createAsyncThunk("homeRecommend", async () => {
    const res = await GetHomeHotRecommendData()
    return res
})

export const HomeLongforDataAction = createAsyncThunk("homeLongFor", async () => {
    const res = await GetHomeLongforData()
    return res
})

const initialState = {
    goodPriceData: {},
    highScoreData: {},
    discountData: {},
    hotRecommendData: {},
    longForData: {}
}

const homeReducer = createSlice({
    name: "homeReducer",
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder.addCase(homeGoodPriceAction.fulfilled, (state, { payload }) => {
            state.goodPriceData = payload
        }).addCase(homeHighScoreDataAction.fulfilled, (state, { payload }) => {
            state.highScoreData = payload
        }).addCase(HomeDiscountDataAction.fulfilled, (state, { payload }) => {
            state.discountData = payload
        }).addCase(HomeHotRecommendDataAction.fulfilled, (state, { payload }) => {
            state.hotRecommendData = payload
        }).addCase(HomeLongforDataAction.fulfilled, (state, { payload }) => {
            state.longForData = payload
        })
    }
})
export default homeReducer.reducer
export const { changeName } = homeReducer.actions