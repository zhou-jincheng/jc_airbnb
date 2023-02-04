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
        <h3>{goodPriceInfo.title}</h3>
        <ul>
          {
            goodPriceInfo.list?.map(item => {
              return <li key={item.id}>{item.name}</li>
            })
          }
        </ul>
      </div>
    </HomeWrapper>
  )
})

export default Home
