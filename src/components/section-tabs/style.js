import styled from "styled-components";


export const TabsWrapper = styled.div`
  .tab-item {
    flex-basis: 120px;
    flex-shrink: 0;
    padding: 14px 16px;
    margin-right: 16px;
    font-size: 17px;
    text-align: center;
    white-space: nowrap;
    border: 1px solid ${props => props.theme.color.borderColor};
    border-radius: 4px;
    cursor: pointer;
    transition: box-shadow 200ms ease;
    &:hover {
      box-shadow: 0 0 4px rgba(0, 0, 0, .18);
    }
    &:last-child {
      margin-right: 0;
    }
    &.active {
      color: #fff;
      background-color: ${props => props.theme.color.secondaryColor};
    }
  }
`
