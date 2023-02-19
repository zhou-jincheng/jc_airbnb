import IconAvatar from '@/assets/svg/icon_avatar'
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'
import React, { memo, useEffect, useState } from 'react'
import { RightWrapper } from './style'

const HeaderRight = memo(() => {
  const [ panelVisible, setPanelVisible ] = useState(false)

  useEffect(() => {
    function closePanel() {
      setPanelVisible(false)
    }
    window.addEventListener('click', closePanel, true)

    return () => {
      window.removeEventListener('click', closePanel, true)
    }
  }, [])

  function handlePanelVisible() {
    setPanelVisible(true)
  }

  return (
    <RightWrapper panelVisible={panelVisible}>
      <div className="operator">
        <span className='btn'>登录</span>
        <span className='btn'>注册</span>
        <span className='btn'>
          <IconGlobal/>
        </span>
      </div>
      <div className="profile" onClick={handlePanelVisible}>
        <IconMenu/>
        <IconAvatar/>

        {
          panelVisible && (
          <div className="panel">
            <div className="top">
              <div className="item register">注册</div>
              <div className="item login">登录</div>
            </div>
            <div className="bottom">
              <div className="item">来爱彼迎发布房源</div>
              <div className="item">开展体验</div>
              <div className="item">帮助</div>
            </div>
          </div>
          )
        }
      </div>
    </RightWrapper>
  )
})

export default HeaderRight
