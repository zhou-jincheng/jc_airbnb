import styled from "styled-components";


export const TabsWrapper = styled.div`
  display: flex;
  justify-content: center;
  .tab-item {
    margin: 10px 16px;
    font-size: 16px;
    color: ${props => props.theme.isAlpha ? '#fff' : props.theme.text.secondaryColor};
    cursor: pointer;
    .bottom {
      margin-top: 8px;
      width: 100%;
      height: 0;
      border: 1px solid ${props => props.theme.isAlpha ? '#fff' : '#333'};
    }
  }
`
