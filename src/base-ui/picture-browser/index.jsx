import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import Indicator from '../indicator'
import { BrowserWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import IconClose from '@/assets/svg/icon-close'
import IconTriangleArrowBottom from '@/assets/svg/icon-triangle-arrow-bottom'
import IconTriangleArrowTop from '@/assets/svg/icon-triangle-arrow-top'

const PictureBrowser = memo((props) => {

  const { close, pictureUrls = [] } = props
  function handleClick() {
    close && close()
  }

  const length = pictureUrls.length
  const [selectedIndex, setSelectedIndex] = useState(0)
  function handlePictureChange(num) {
    let newIndex = selectedIndex + num
    if (newIndex < 0) newIndex = length -1
    if (newIndex > length -1) newIndex = 0
    setSelectedIndex(newIndex)
  }

  const [isHide, setIsHide] = useState(false)
  function handleHideToggle() {
    setIsHide(!isHide)
  }

  return (
    <BrowserWrapper hide={isHide}>
      <div className="top">
        <div className="btn-close" onClick={handleClick}>
          <IconClose/>
        </div>
      </div>
      <div className="slider">
        <div className="controls">
          <div className="btn right" onClick={() => handlePictureChange(1)}>
            <IconArrowRight width={80} height={80}/>
          </div>
          <div className="btn left" onClick={() => handlePictureChange(-1)}>
            <IconArrowLeft width={80} height={80}/>
          </div>
        </div>
        <div className="picture">
          <img src={pictureUrls[selectedIndex]} alt="" />
        </div>
      </div>
      <div className="preview">
        <div className="info">
          <div className="desc">
            <div>{`${selectedIndex + 1}/${length}:room apartment 图片${selectedIndex + 1}`}</div>
            <div>
              <span>隐藏照片列表</span>
              <span className="toggle" onClick={handleHideToggle}>
                { isHide ? <IconTriangleArrowTop/> : <IconTriangleArrowBottom/>}
              </span>
            </div>
          </div>
          <div className="list">
            <Indicator selectedIndex={selectedIndex}>
              {
                pictureUrls.map(item => (
                  <div key={item} className="item">
                    <img src={item} alt="" />
                  </div>
                ))
              }
            </Indicator>
          </div>
        </div>
      </div>
    </BrowserWrapper>
  )
})

PictureBrowser.propTypes = {
  pictureUrls: PropTypes.array,
  close: PropTypes.func
}

export default PictureBrowser
