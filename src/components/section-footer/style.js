import styled from "styled-components";


export const FooterWrapper = styled.div`
  display: flex;
  margin-top: 8px;;
  .more {
    display: flex;
    align-items: center;
    font-size: 17px;
    font-weight: 700;
    color: ${props => props.name ? props.theme.color.secondaryColor : '#000'};
    cursor: pointer;
    .text {
      margin-right: 6px;
    }
  }
`
