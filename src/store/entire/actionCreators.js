import { getEntireRoomList } from '@/services'
import * as actionTypes from './constants'

export function changeRoomListAction(roomList) {
  return {
    type: actionTypes.CHANGE_ROOM_LIST,
    roomList
  }
}

export const changeCurrentPageAction = (currentPage) => {
  return {
    type: actionTypes.CHANGE_CURRENT_PAGE,
    currentPage
  }
}

export const changeTotalAction = (total) => {
  return {
    type: actionTypes.CHANGE_TOTAL,
    total
  }
}

export const changeLoadingAction = (loading) => {
  return {
    type: actionTypes.CHANGE_LOADING,
    loading
  }
}

export const fetchRoomListAction = () => {
  return async function(dispatch, getState) {
    const currentPage =  getState().entire.currentPage
    dispatch(changeLoadingAction(true))
    const res = await getEntireRoomList((currentPage - 1) * 20)
    dispatch(changeLoadingAction(false))
    dispatch(changeRoomListAction(res.list))
    dispatch(changeTotalAction(res.totalCount))
  }
}


