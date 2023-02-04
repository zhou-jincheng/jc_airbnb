import { getGoodPriceData } from '@/services'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchGoodPriceDataAction = createAsyncThunk(
  'home/fetchGoodPriceDataAction',
  async (payload) => {
    const res = await getGoodPriceData()
    return res
  }
)

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {}
  },
  reducers: {
    setGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    }
  },
  extraReducers: {
    [fetchGoodPriceDataAction.fulfilled]: (state, { payload }) => {
      state.goodPriceInfo = payload
    }
  }
})

export const { setGoodPriceInfoAction } = homeSlice.actions

export default homeSlice.reducer
