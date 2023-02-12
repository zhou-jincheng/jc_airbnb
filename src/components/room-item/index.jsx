import PropTypes from "prop-types";
import React, { memo, useRef } from "react";
import Rating from '@mui/material/Rating';
import { Carousel } from 'antd';
import { ItemWrapper } from "./style";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";

const RoomItem = memo((props) => {
  const { itemData, itemWidth } = props

  const carouselRef = useRef(null)
  function handleControlClick(isRight = true) {
    isRight ? carouselRef.current.next() : carouselRef.current.prev()
  }
  return (
    <ItemWrapper width={itemWidth} verifyColor={itemData.verify_info.text_color}>
      {/* <div className="cover">
        <img src={itemData.picture_url} alt="" />
      </div> */}
      <div className="slider">
        <div className="control">
          <div className="btn left" onClick={e => handleControlClick(false)}>
            <IconArrowLeft width={30} height={30}/>
          </div>
          <div className="btn right" onClick={e => handleControlClick(true)}>
            <IconArrowRight width={30} height={30}/>
          </div>
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
