import styled from "styled-components";


export const PiginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  .pigination {
    color: ${props => props.theme.text.secondaryColor};
    .MuiPaginationItem-icon {
      font-size: 24px;
    }
    .MuiPaginationItem-page {
      margin: 0 9px;
      color: ${props => props.theme.text.secondaryColor};
      &.Mui-selected {
        background-color: ${props => props.theme.text.secondaryColor};
        color: #fff;
      }
    }
    .tip {
      margin-top: 16px;
      text-align: center;
    }
  }
`
