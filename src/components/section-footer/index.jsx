import IconMoreArrow from "@/assets/svg/icon-more-arrow";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { FooterWrapper } from "./style";

const SectionFooter = memo((props) => {
  const { name } = props
  let showText = '显示全部'
  if (name) {
    showText = `查看更多${name}房源`
  }

  const navigate = useNavigate()
  function moreClick() {
    navigate('/entire')
  }
  return (
    <FooterWrapper name={name}>
      <div className="more" onClick={moreClick}>
        <div className="text">{showText}</div>
        <IconMoreArrow/>
      </div>
    </FooterWrapper>
  );
});

SectionFooter.propTypes = {
  name: PropTypes.string
};

export default SectionFooter;
