import RoomItem from '@/components/room-item'
import { changeDetailInfoAction } from '@/store/detail/actionCreators'
import React, { memo, useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RoomsWrapper } from './style'

const EntireRooms = memo(() => {
  const { roomList, total, loading } = useSelector((state) => ({
    roomList: state.entire.roomList,
    total: state.entire.total,
    loading: state.entire.loading
  }), shallowEqual)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleItemClick = useCallback(data => {
    dispatch(changeDetailInfoAction(data))
    navigate('/detail')
  }, [navigate, dispatch])
  return (
    <RoomsWrapper>
      <h2 className="title">
        {total}多处住所
      </h2>
      <div className="list">
        {
          roomList.map(item => (
            <RoomItem
              itemData={item}
              itemWidth="20%"
              itemClick={handleItemClick}
              key={item._id}/>
          ))
        }
      </div>
      { loading && <div className="cover"></div> }
    </RoomsWrapper>
  )
})

export default EntireRooms
