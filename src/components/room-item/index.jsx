import PropTypes from "prop-types";
import React, { memo } from "react";
import { ItemWrapper } from "./style";

const RoomItem = memo((props) => {
  const { itemData } = props
  return (
    <ItemWrapper>
      <div className="cover">
        <img src={itemData.picture_url} alt="" />
      </div>
      <div className="desc">{itemData.verify_info.messages.join(' . ')}</div>
      <div className="name">{itemData.name}</div>
      <div className="price">￥{itemData.price}/晚</div>
      <div className="info">
        <span className="start">*</span>
        <span className="count">{itemData.reviews_count}</span>
        <span className="centent">{itemData.bottom_info?.content}</span>
      </div>
    </ItemWrapper>
  );
});

RoomItem.propTypes = {
  itemData: PropTypes.object.isRequired
};

export default RoomItem;
