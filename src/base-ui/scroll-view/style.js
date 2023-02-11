import styled from "styled-components";


export const ViewWrapper = styled.div`
  position: relative;
  padding: 8px 0;
  .control {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    position: absolute;
    z-index: 9;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 2px 2px 1px rgba(0, 0, 0, .18);
  }
  .left {
    margin-left: ${props => props.offset || '-14px'};
  }
  .right {
    right: 0;
    margin-right: ${props => props.offset || '-14px'};
  }
  .content {
    overflow: hidden;
      .children {
      display: flex;
      transition: transform 250ms ease;
    }
  }
`
