import * as actionTypes from './constants'

export const changeDetailInfoAction = (detailInfo) => {
  return {
    type: actionTypes.CHANGE_DETAIL_INFO,
    detailInfo
  }
}
