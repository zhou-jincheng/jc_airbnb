import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import React, { memo, useEffect, useRef, useState } from "react";
import { ViewWrapper } from "./style";

const ScrollView = memo((props) => {
  const [index, setIndex] = useState(0)
  const [rightVisible, setRightVisible] = useState(false)
  const [leftVisible, setLeftVisible] = useState(false)
  const contentRef = useRef(null)
  const totalDistance = useRef(0)

  useEffect(() => {
    const scrollWidth = contentRef.current.scrollWidth
    const clientWidth = contentRef.current.clientWidth
    totalDistance.current = scrollWidth - clientWidth
    setRightVisible(totalDistance.current > 0)
  }, [])

  function controlClick(num) {
    const nextIndex = index + num
    const children = contentRef.current.children
    const offsetLeft = children[nextIndex].offsetLeft
    contentRef.current.style.transform = `translatex(-${offsetLeft}px)`
    setIndex(nextIndex)
    setRightVisible(totalDistance.current > offsetLeft)
    setLeftVisible(offsetLeft > 0)
  }

  return (
    <ViewWrapper>
      {
        leftVisible && (
          <div className="left" onClick={() => controlClick(-1)}>
            <IconArrowLeft/>
          </div>
        )
      }
      {
        rightVisible && (
          <div className="right" onClick={() => controlClick(1)}>
            <IconArrowRight/>
          </div>
        )
      }
      <div className="content">
        <div ref={contentRef} className="children">
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  );
});

export default ScrollView;
