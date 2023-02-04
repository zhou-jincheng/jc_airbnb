import styled from 'styled-components'

export const FooterWrapper = styled.div`
  height: 240px;
  border-top: 1px solid ${props => props.theme.color.borderColor};
  .content {
    width: 1080px;
    height: 100%;
    margin: auto;
    padding: 48px 24px;
    color: #767676;
    font-weight: 600;
    .service {
      display: flex;
      height: 144px;
      .list-box {
        width: 25%;
        .title {
          color: ${props => props.theme.text.primaryColor};
        }
        .list {
          margin-top: 16px;
          .list-item {
            margin-bottom: 4px;
          }
        }
      }
    }
    .statement {
      display: flex;
      align-items: center;
      margin-top: 16px;
      padding-top: 16px;
      border-top: 1px solid #eee;
      .left {
        margin-right: 8px;
      }
    }
  }
`
