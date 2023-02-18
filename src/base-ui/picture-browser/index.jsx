import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import Indicator from '../indicator'
import { BrowserWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import IconClose from '@/assets/svg/icon-close'
import IconTriangleArrowBottom from '@/assets/svg/icon-triangle-arrow-bottom'
import IconTriangleArrowTop from '@/assets/svg/icon-triangle-arrow-top'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

const PictureBrowser = memo((props) => {

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  /* 关闭图片浏览器 */
  const { close, pictureUrls = [] } = props
  function handleClick() {
    close && close()
  }

  /* 控制中部图片切换动画方向 */
  const [isNext, setIsNext] = useState(false)

  /* 底部浏览器切换图片 */
  const length = pictureUrls.length
  const [selectedIndex, setSelectedIndex] = useState(0)
  function handlePictureChange(num) {
    let newIndex = selectedIndex + num
    if (newIndex < 0) newIndex = length -1
    if (newIndex > length -1) newIndex = 0
    setSelectedIndex(newIndex)
    setIsNext(newIndex > selectedIndex)
  }

  /* 隐藏底部浏览器 */
  const [isHide, setIsHide] = useState(false)
  function handleHideToggle() {
    setIsHide(!isHide)
  }

  return (
    <BrowserWrapper hide={isHide} isNext={isNext}>
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
          <SwitchTransition mode='in-out'>
            <CSSTransition
              key={pictureUrls[selectedIndex]}
              timeout={200}
              classNames="image">
              <img src={pictureUrls[selectedIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="preview">
        <div className="info">
          <div className="desc">
            <div>{`${selectedIndex + 1}/${length}:room apartment 图片${selectedIndex + 1}`}</div>
            <div>
              <span className="toggle" onClick={handleHideToggle}>
                <span>{isHide ? '显示' : '隐藏'}照片列表</span>
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
