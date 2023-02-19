import { fetchGoodPriceDataAction } from '@/store/home'
import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import HomeBanner from './c-cpns/home-banner'
import { HomeWrapper } from './style'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import { isNotEmptyObj } from '@/utils'
import HomeLongFor from './c-cpns/home-long-for'
import HomeSectionV3 from './c-cpns/home-section-v3'
import { changeHeaderConfigAction } from '@/store/main'

const Home = memo(() => {

  const {
    goodPriceInfo,
    highScoreInfo,
    discountInfo,
    recommendInfo,
    longForInfo,
    plusInfo,
  } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    recommendInfo: state.home.recommendInfo,
    longForInfo: state.home.longForInfo,
    plusInfo: state.home.plusInfo,
  }), shallowEqual)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchGoodPriceDataAction())
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: true }))
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner/>
      <div className="section">
        { isNotEmptyObj(discountInfo) && <HomeSectionV2 infoData={discountInfo} /> }
        { isNotEmptyObj(recommendInfo) && <HomeSectionV2 infoData={recommendInfo} /> }

        { isNotEmptyObj(longForInfo) && <HomeLongFor infoData={longForInfo} /> }

        { isNotEmptyObj(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} /> }
        { isNotEmptyObj(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} /> }
        { isNotEmptyObj(plusInfo) && <HomeSectionV3 infoData={plusInfo} /> }
      </div>
    </HomeWrapper>
  )
})

export default Home
