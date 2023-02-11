import ScrollView from "@/base-ui/scroll-view";
import RoomItem from "@/components/room-item";
import SectionFooter from "@/components/section-footer";
import SectionHeader from "@/components/section-header";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { SectionV3Wrapper } from "./style";

const HomeSectionV3 = memo((props) => {
  const { infoData } = props

  return (
    <SectionV3Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
      <div className="list">
        <ScrollView controlOffset="-6px">
          {
            infoData.list?.map(item => (
              <RoomItem key={item.id} itemData={item} itemWidth='20%' />
            ))
          }
        </ScrollView>
      </div>
      <SectionFooter name={infoData.type}/>
    </SectionV3Wrapper>
  );
});

HomeSectionV3.propTypes = {
  infoData: PropTypes.object
};

export default HomeSectionV3;
