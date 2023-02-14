import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { PicturesWrapper } from './style'

const DetailPictures = memo(() => {
  const { detailInfo } = useSelector(state => ({
    detailInfo: state.detail.detailInfo
  }), shallowEqual)

  const pictures = detailInfo.picture_urls || []
  return (
    <PicturesWrapper>
      <div className="pictures">
        <div className="left">
          <div className="item">
            <img src={pictures[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {
            pictures.slice(1, 5).map(item => (
              <div className="item" key={item}>
                <img src={item} alt="" />
                <div className="cover"></div>
              </div>
            ))
          }
        </div>
      </div>
    </PicturesWrapper>
  )
})

export default DetailPictures
