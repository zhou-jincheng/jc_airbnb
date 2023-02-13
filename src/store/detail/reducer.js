import * as actionTypes from './constants'

const initState = {
  detailInfo: {}
}

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_DETAIL_INFO:
      return { ...state, detailInfo: action.detailInfo }
    default:
      return state
  }
}

export default reducer
