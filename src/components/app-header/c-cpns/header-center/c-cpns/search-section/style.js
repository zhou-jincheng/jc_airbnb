import styled from "styled-components";


export const SectionWrapper = styled.div`
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  width: 850px;
  height: 66px;
  border-radius: 33px;
  border: 1px solid ${props => props.theme.color.borderColor};
  background-color: #fff;
  .info-item {
    flex: 1;
    display: flex;
    align-items: center;
    padding-left: 30px;
    border-radius: 33px;
    height: 100%;
    &:hover {
      background-color: #eee;
    }
    .info {
      width: 100%;
      border-right: 1px solid ${props => props.theme.color.borderColor};
      .title {
        font-size: 12px;
        font-weight: 700;
        color: ${props => props.theme.text.secondaryColor};
      }
      .desc {
        color: #666;
      }
    }
    &:last-child {
      .info {
        border-right: none;
      }
    }
  }
`
