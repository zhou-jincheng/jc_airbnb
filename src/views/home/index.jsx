import RoomItem from '@/components/room-item'
import SectionHeader from '@/components/section-header'
import { fetchGoodPriceDataAction } from '@/store/home'
import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import HomeBanner from './c-cpns/home-banner'
import { HomeWrapper } from './style'

const Home = memo(() => {

  const { goodPriceInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo
  }), shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchGoodPriceDataAction())
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner/>
      <div className="section">
        <SectionHeader title={goodPriceInfo.title} />
        <div className='room-list'>
          {
            goodPriceInfo.list?.slice(0, 8).map(item => {
              return (
                <div key={item.id} className="list-item">
                  <RoomItem itemData={item}/>
                </div>
              )
            })
          }
        </div>
      </div>
    </HomeWrapper>
  )
})

export default Home
