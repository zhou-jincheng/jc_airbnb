import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import classnames from "classnames";
import { TabsWrapper } from "./style";

const SectionTabs = memo((props) => {
  const { tabNames = [], tabClick } = props

  const [currentIndex, setCurrentIndex] = useState(0)
  function handleTabClick(item, index) {
    setCurrentIndex(index)
    tabClick && tabClick(item, index)
  }

  return (
    <TabsWrapper>
      {
        tabNames.map((item, index) => (
          <div
            key={item}
            className={classnames("tab-item", { active: currentIndex === index })}
            onClick={e => handleTabClick(item, index)}>
            {item}
          </div>
        ))
      }
    </TabsWrapper>
  );
});

SectionTabs.propTypes = {
  tabNames: PropTypes.array,
  tabClick: PropTypes.func
};

export default SectionTabs;
