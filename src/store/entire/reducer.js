import * as actionTypes from './constants'

const initState = {
  roomList: [],
  currentPage: 1,
  total: 0,
  loading: false
}

function reducer(state = initState, action) {
  switch(action.type) {
    case actionTypes.CHANGE_ROOM_LIST:
      return { ...state, roomList: action.roomList }
    case actionTypes.CHANGE_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage }
    case actionTypes.CHANGE_TOTAL:
      return { ...state, total: action.total }
    case actionTypes.CHANGE_LOADING:
      return { ...state, loading: action.loading }
    default:
      return state
  }
}

export default reducer
