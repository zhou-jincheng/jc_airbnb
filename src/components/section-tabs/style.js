import styled from "styled-components";


export const TabsWrapper = styled.div`
  display: flex;

  .tab-item {
    padding: 14px 16px;
    margin-right: 16px;
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
