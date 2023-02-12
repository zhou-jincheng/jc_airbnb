import IconLogo from '@/assets/svg/icon_logo'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { LeftWrapper } from './style'

const HeaderLeft = memo(() => {
  const navigate = useNavigate()
  function handleLogoClick() {
    navigate("/home")
  }
  return (
    <LeftWrapper>
      <div className="logo" onClick={handleLogoClick}>
        <IconLogo/>
      </div>
    </LeftWrapper>
  )
})

export default HeaderLeft
