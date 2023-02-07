import PropTypes from "prop-types";
import React, { memo } from "react";
import { SectionWrapper } from "./style";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";

const HomeSectionV1 = memo((props) => {
  const { infoData } = props
  return (
    <SectionWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionRooms roomList={infoData.list}/>
    </SectionWrapper>
  );
});

HomeSectionV1.propTypes = {
  infoData: PropTypes.object.isRequired
};

export default HomeSectionV1;
