import PictureBrowser from '@/base-ui/picture-browser'
import React, { memo, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { PicturesWrapper } from './style'

const DetailPictures = memo(() => {
  const { detailInfo } = useSelector(state => ({
    detailInfo: state.detail.detailInfo
  }), shallowEqual)

  const [picturesVisible, setPicturesVisible] = useState(false)

  const pictures = detailInfo.picture_urls || []
  return (
    <PicturesWrapper>
      <div className="pictures">
        <div className="left">
          <div className="item" onClick={() => setPicturesVisible(true)}>
            <img src={pictures[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {
            pictures.slice(1, 5).map(item => (
              <div className="item" key={item} onClick={() => setPicturesVisible(true)}>
                <img src={item} alt="" />
                <div className="cover"></div>
              </div>
            ))
          }
        </div>
      </div>
      <div className="btn" onClick={() => setPicturesVisible(true)}>显示照片</div>
      { picturesVisible && <PictureBrowser pictureUrls={pictures} close={() => setPicturesVisible(false)}/> }
    </PicturesWrapper>
  )
})

export default DetailPictures
