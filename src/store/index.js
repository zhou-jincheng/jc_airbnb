import { configureStore } from '@reduxjs/toolkit'

import homeReducer from './home'
import entireReducer from './entire'
import detailReducer from './detail'
import mainReducer from './main'

const store = configureStore({
  reducer: {
    home: homeReducer,
    entire: entireReducer,
    detail: detailReducer,
    main: mainReducer
  }
})

export default store
