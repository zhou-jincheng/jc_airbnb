import React, { memo, useCallback } from 'react'
import Pagination from '@mui/material/Pagination';
import { PiginationWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { ENTIRE_PAGE_SIZE } from '@/utils/constant';
import { changeCurrentPageAction, fetchRoomListAction } from '@/store/entire/actionCreators';

const EntirePigination = memo(() => {
  const { currentPage, total } = useSelector(state => ({
    currentPage: state.entire.currentPage,
    total: state.entire.total
  }), shallowEqual)

  const dispatch = useDispatch()
  const handlePageChange = useCallback((_, value) => {
    window.scroll(0, 0)
    dispatch(changeCurrentPageAction(value))
    dispatch(fetchRoomListAction())
  }, [dispatch])

  const count = Math.ceil(total / ENTIRE_PAGE_SIZE)
  const start = currentPage * ENTIRE_PAGE_SIZE + 1
  const end = (currentPage + 1) * ENTIRE_PAGE_SIZE
  return (
    <PiginationWrapper>
      <div className="pigination">
        <Pagination count={count} color="primary" onChange={handlePageChange} />
        <div className="tip">
          第 {start} - {end} 个房源, 共超过 {total} 个
        </div>
      </div>
    </PiginationWrapper>
  )
})

export default EntirePigination
