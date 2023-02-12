import React, { memo, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { IndicatorWrapper } from './style'

const Indicator = memo(function Indicator(props) {
  const { selectedIndex } = props
  const contentRef = useRef(null)
  useEffect(() => {
    const activedEl = contentRef.current.children[selectedIndex]
    const contentWidth = contentRef.current.offsetWidth
    const activedLeft = activedEl.offsetLeft
    const activedWidth = activedEl.offsetWidth
    let distance = activedLeft + activedWidth * 0.5 - contentWidth * 0.5
    // 前面部分无需移动
    if (distance < 0) distance = 0
    // 尾部部分无需移动
    const totalDistance = contentRef.current.scrollWidth - contentWidth
    if (distance > totalDistance) distance = totalDistance
    contentRef.current.style.transform = `translate(${-distance}px)`
  }, [selectedIndex])

  return (
    <IndicatorWrapper>
      <div ref={contentRef} className="content">
        {props.children}
      </div>
    </IndicatorWrapper>
  )
})

Indicator.propTypes = {
  selectedIndex: PropTypes.number.isRequired
}

export default Indicator
