import React, { memo } from 'react'
import DetialInfo from './c-cpns/detail-infos'
import DetailPictures from './c-cpns/detail-pictures'
import { DetailWrapper } from './style'

const Detail = memo(() => {
  return (
    <DetailWrapper>
      <DetailPictures/>
      <DetialInfo/>
    </DetailWrapper>
  )
})

export default Detail
