import PropTypes from "prop-types";
import React, { memo } from "react";
import RoomItem from "../room-item";
import { RoomsWrapper } from "./style";

const SectionRooms = memo((props) => {
  const { roomList, roomWidth = '25%' } = props
  return (
    <RoomsWrapper roomWidth={roomWidth}>
      {
        roomList?.slice(0, 8).map(item => (
          <RoomItem itemData={item} itemWidth={roomWidth}/>
        ))
      }
    </RoomsWrapper>
  );
});

SectionRooms.propTypes = {
  roomList: PropTypes.array,
  roomWidth: PropTypes.string
};

export default SectionRooms;
