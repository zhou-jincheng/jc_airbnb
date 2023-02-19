import styled from "styled-components";


export const FilterWrapper = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  z-index: 19;
  display: flex;
  padding: 8px 18px;
  border-bottom: 1px solid #eee;
  background-color: #fff;
  .item {
    padding: 6px 12px;
    margin: 0 4px 0 8px;
    border: 1px solid ${props => props.theme.color.borderColor};
    border-radius: 4px;
    cursor: pointer;

    &.active {
      background-color: ${props => props.theme.color.secondaryColor};
      color: #fff;
    }
  }
`
