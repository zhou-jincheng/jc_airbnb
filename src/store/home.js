import { getGoodPriceData, getHighScoreData } from '@/services'
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
  }
)

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {}
  },
  reducers: {
    setGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    setHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload
    }
  }
})

export const { setGoodPriceInfoAction, setHighScoreInfoAction } = homeSlice.actions

export default homeSlice.reducer
