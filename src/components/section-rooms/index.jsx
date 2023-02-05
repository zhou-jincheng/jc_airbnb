import PropTypes from "prop-types";
import React, { memo } from "react";
import RoomItem from "../room-item";
import { RoomsWrapper } from "./style";

const SectionRooms = memo((props) => {
  const { roomList } = props
  return (
    <RoomsWrapper>
      {
        roomList?.slice(0, 8).map(item => {
          return (
            <div key={item.id} className="list-item">
              <RoomItem itemData={item}/>
            </div>
          )
        })
      }
    </RoomsWrapper>
  );
});

SectionRooms.propTypes = {
  roomList: PropTypes.array
};

export default SectionRooms;
