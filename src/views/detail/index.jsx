import { changeHeaderConfigAction } from '@/store/main'
import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import DetialInfo from './c-cpns/detail-infos'
import DetailPictures from './c-cpns/detail-pictures'
import { DetailWrapper } from './style'

const Detail = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: false, topAlpha: false }))
  }, [dispatch])
  return (
    <DetailWrapper>
      <DetailPictures/>
      <DetialInfo/>
    </DetailWrapper>
  )
})

export default Detail
