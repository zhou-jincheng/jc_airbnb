import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import EntireFilter from './c-cpns/entire-filter'
import EntirePigination from './c-cpns/entire-pigination'
import EntireRooms from './c-cpns/entire-rooms'
import { EntireWrapper } from './style'
import { fetchRoomListAction } from '@/store/entire/actionCreators'
import { changeHeaderConfigAction } from '@/store/main'

const Entire = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRoomListAction(0))
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: false }))
  }, [dispatch])
  return (
    <EntireWrapper>
      <EntireFilter/>
      <EntireRooms/>
      <EntirePigination/>
    </EntireWrapper>
  )
})

export default Entire
