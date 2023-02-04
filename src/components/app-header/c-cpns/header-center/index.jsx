import IconSearchBar from '@/assets/svg/icon-search-bar'
import React, { memo } from 'react'
import { CenterWrapper } from './style'

const HeaderCenter = memo(() => {
  return (
    <CenterWrapper>
      <div className="search-wrapper">
        <span className="search-text">搜索房源和体验</span>
        <span className="search-icon">
          <IconSearchBar/>
        </span>
      </div>
    </CenterWrapper>
  )
})

export default HeaderCenter
