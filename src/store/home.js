import { getDiscountData, getGoodPriceData, getHighScoreData, getHotRecommendData, getLongForData, getPlusData } from '@/services'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchGoodPriceDataAction = createAsyncThunk(
  'home/fetchGoodPriceDataAction',
  (payload, { dispatch }) => {
    getGoodPriceData().then(res => {
      dispatch(setGoodPriceInfoAction(res))
    })
    getHighScoreData().then(res => {
      dispatch(setHighScoreInfoAction(res))
    })
    getDiscountData().then(res => {
      dispatch(setDiscountInfoAction(res))
    })
    getHotRecommendData().then(res => {
      dispatch(setRecommendInfoAction(res))
    })
    getLongForData().then(res => {
      dispatch(setLongForInfoAction(res))
    })
    getPlusData().then(res => {
      dispatch(setPlusInfoAction(res))
    })
  }
)

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    recommendInfo: {},
    longForInfo: {},
    plusInfo: {}
  },
  reducers: {
    setGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    setHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload
    },
    setDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload
    },
    setRecommendInfoAction(state, { payload }) {
      state.recommendInfo = payload
    },
    setLongForInfoAction(state, { payload }) {
      state.longForInfo = payload
    },
    setPlusInfoAction(state, { payload }) {
      state.plusInfo = payload
    },
  }
})

export const {
  setGoodPriceInfoAction,
  setHighScoreInfoAction,
  setDiscountInfoAction,
  setRecommendInfoAction,
  setLongForInfoAction,
  setPlusInfoAction
} = homeSlice.actions

export default homeSlice.reducer
