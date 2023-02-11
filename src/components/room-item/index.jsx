import PropTypes from "prop-types";
import React, { memo } from "react";
import Rating from '@mui/material/Rating';
import { ItemWrapper } from "./style";

const RoomItem = memo((props) => {
  const { itemData, itemWidth } = props
  return (
    <ItemWrapper width={itemWidth} verifyColor={itemData.verify_info.text_color}>
      <div className="cover">
        <img src={itemData.picture_url} alt="" />
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
