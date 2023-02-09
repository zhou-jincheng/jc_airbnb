import React, { memo, useCallback, useState } from "react";
import PropTypes from "prop-types"
import { SectionV2Wrapper } from "./style";
import SectionHeader from "@/components/section-header";
import SectionTabs from "@/components/section-tabs";
import SectionRooms from "@/components/section-rooms";
import SectionFooter from "@/components/section-footer";

const HomeSectionV2 = memo((props) => {
  const { infoData } = props

  const tabNames = infoData.dest_address?.map(item => item.name) || ['']
  const [cityName, setCityName] = useState(tabNames[0])
  const handleCityChange = useCallback(function(name) {
    setCityName(name)
  }, [])

  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
      <SectionTabs tabNames={tabNames} tabClick={name => handleCityChange(name)}/>
      <SectionRooms roomList={infoData.dest_list?.[cityName]} roomWidth="33.3333%"/>
      <SectionFooter name={cityName}/>
    </SectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  infoData: PropTypes.object.isRequired
}


export default HomeSectionV2
