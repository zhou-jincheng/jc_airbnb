import styled from 'styled-components'

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: 700;
  font-size: 14px;
  margin-right: 20px;
  .operator {
    display: flex;
    align-items: center;
    color: ${props => props.theme.text.secondaryColor};
    .btn {
      padding: 8px 15px;
      margin-right: -8px;
      border-radius: 16px;
      cursor: pointer;
      &:hover {
        background-color: #eee;
      }
    }
    margin-right: 12px;
  }
  .profile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 77px;
    height: 42px;
    padding-left: 12px;
    padding-right: 8px;
    border: 1px solid #ccc;
    border-radius: 21px;
  }
`
