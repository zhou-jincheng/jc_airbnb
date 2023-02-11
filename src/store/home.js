import { getDiscountData, getGoodPriceData, getHighScoreData, getHotRecommendData, getLongForData } from '@/services'
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
  }
)

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    recommendInfo: {},
    longForInfo: {}
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
  }
})

export const {
  setGoodPriceInfoAction,
  setHighScoreInfoAction,
  setDiscountInfoAction,
  setRecommendInfoAction,
  setLongForInfoAction
} = homeSlice.actions

export default homeSlice.reducer
