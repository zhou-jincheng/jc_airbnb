import PropTypes from "prop-types";
import React, { memo, useRef, useState } from "react";
import Rating from '@mui/material/Rating';
import { Carousel } from 'antd';
import { ItemWrapper } from "./style";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import Indicator from "@/base-ui/indicator";
import classNames from "classnames";

const RoomItem = memo((props) => {
  const { itemData, itemWidth, itemClick } = props

  const carouselRef = useRef(null)
  const [selectedIndex, setSelectedIndex] = useState(0)
  function handleControlClick(isRight = true, event) {
    isRight ? carouselRef.current.next() : carouselRef.current.prev()
    let newIndex = selectedIndex + (isRight ? 1 : -1)
    const length = itemData?.picture_urls?.length || 0
    // 处理左边边界
    if (newIndex < 0) newIndex = length - 1
    // 处理右边边界
    if (newIndex > length - 1) newIndex = 0
    setSelectedIndex(newIndex)
    // 阻止事件冒泡
    event.stopPropagation()
  }

  function handleItemClick() {
    itemClick && itemClick(itemData)
  }

  const pictureElement = (
    <div className="cover">
      <img src={itemData.picture_url} alt="" />
    </div>
  )
  const sliderElement = (
    <div className="slider">
      <div className="control">
        <div className="btn left" onClick={e => handleControlClick(false, e)}>
          <IconArrowLeft width={30} height={30}/>
        </div>
        <div className="btn right" onClick={e => handleControlClick(true, e)}>
          <IconArrowRight width={30} height={30}/>
        </div>
      </div>
      <div className="dots">
        <Indicator selectedIndex={selectedIndex}>
          {
            itemData?.picture_urls?.map((item, index) => (
              <div key={item} className="dot-item">
                <span className={classNames("dot", { active: selectedIndex === index })}></span>
              </div>
            ))
          }
        </Indicator>
      </div>
      <Carousel ref={carouselRef} dots={false}>
        {
          itemData?.picture_urls?.map(item => (
            <div className="cover" key={item}>
              <img src={item} alt="" />
            </div>
          ))
        }
      </Carousel>
    </div>
  )
  return (
    <ItemWrapper
      width={itemWidth}
      verifyColor={itemData.verify_info.text_color}
      onClick={handleItemClick}>
      { !itemData.picture_urls ? pictureElement : sliderElement }
      <div className="desc">{itemData.verify_info.messages.join(' . ')}</div>
      <div className="name">{itemData.name}</div>
      <div className="price">￥{itemData.price}/晚</div>
      <div className="info">
        <Rating
          value={itemData.star_rating ?? 5}
          precision={0.1}
          readOnly
          sx={{ fontSize: '12px', marginRight: '2px' }}
        />
        <span className="count">{itemData.reviews_count}</span>
        {itemData.bottom_info &&<span className="centent">·{itemData.bottom_info.content}</span>}
      </div>
    </ItemWrapper>
  );
});

RoomItem.propTypes = {
  itemData: PropTypes.object.isRequired,
  itemWidth: PropTypes.string
};

export default RoomItem;
