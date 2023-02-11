import React, { memo } from 'react'
import EntireFilter from './c-cpns/entire-filter'
import EntirePigination from './c-cpns/entire-pigination'
import EntireRooms from './c-cpns/entire-rooms'
import { EntireWrapper } from './style'

const Entire = memo(() => {
  return (
    <EntireWrapper>
      <EntireFilter/>
      <EntireRooms/>
      <EntirePigination/>
    </EntireWrapper>
  )
})

export default Entire
