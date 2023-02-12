import RoomItem from '@/components/room-item'
import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { RoomsWrapper } from './style'

const EntireRooms = memo(() => {
  const { roomList, total, loading } = useSelector((state) => ({
    roomList: state.entire.roomList,
    total: state.entire.total,
    loading: state.entire.loading
  }), shallowEqual)
  return (
    <RoomsWrapper>
      <h2 className="title">
        {total}多处住所
      </h2>
      <div className="list">
        {
          roomList.map(item => (
            <RoomItem itemData={item} itemWidth="20%" key={item._id}/>
          ))
        }
      </div>
      { loading && <div className="cover"></div> }
    </RoomsWrapper>
  )
})

export default EntireRooms
