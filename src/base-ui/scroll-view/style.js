import styled from "styled-components";


export const ViewWrapper = styled.div`
  position: relative;
  padding: 8px 0;
  .left, .right {
    position: absolute;
    z-index: 9;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 2px 2px 1px rgba(0, 0, 0, .18);
  }
  .left {
    margin-left: -14px;
  }
  .right {
    right: 0;
    margin-right: -14px;
  }
  .content {
    overflow: hidden;
      .children {
      display: flex;
      transition: transform 250ms ease;
    }
  }
`
