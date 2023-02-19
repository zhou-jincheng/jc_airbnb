import styled from 'styled-components'

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 20px;
  color: ${props => props.theme.isAlpha ? '#fff' : props.theme.text.secondaryColor};
  .operator {
    display: flex;
    align-items: center;
    font-weight: 700;
    .btn {
      padding: 8px 15px;
      margin-right: -8px;
      border-radius: 16px;
      cursor: pointer;
      &:hover {
        background-color: rgba(255, 255, 255, ${props => props.theme.isAlpha ? .3 : .9});
      }
    }
    margin-right: 12px;
  }
  .profile {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 77px;
    height: 42px;
    padding-left: 12px;
    padding-right: 8px;
    color: #717171;
    cursor: pointer;
    border: 1px solid ${props => props.theme.color.borderColor};
    border-radius: 21px;
    background-color: #fff;
    transition: box-shadow 200ms ease;
    box-shadow: ${props => props.panelVisible ? '0 2px 4px rgba(0, 0, 0, .18)' : 'none'};
    ${props => props.theme.mixins.boxShadow}
    .panel {
      position: absolute;
      right: 0;
      top: 50px;
      width: 240px;
      box-shadow: 0 0 6px rgba(0, 0, 0, .18);
      border-radius: 8px;
      background-color: #fff;
      .top, .bottom {
        padding: 8px 0;
      }
      .top {
        border-bottom: 1px solid ${props => props.theme.color.borderColor};
        .register {
          font-weight: 700;
        }
      }
      .item {
        height: 40px;
        line-height: 40px;
        padding: 0 12px;
        cursor: pointer;
        &:hover {
          background-color: #f7f7f7;
        }
      }
    }
  }
`
