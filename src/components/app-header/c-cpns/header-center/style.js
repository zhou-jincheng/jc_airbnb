import styled from 'styled-components'

export const CenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 348px;
  .search-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    height: 48px;
    padding: 8px;
    border: 1px solid ${props => props.theme.color.borderColor};
    border-radius: 24px;
    .search-text {
      font-weight: 700;
      padding-left: 16px;
    }
    .search-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
      color: #fff;
      border-radius: 50%;
      background-color: ${props => props.theme.color.primaryColor};
    }
    ${props => props.theme.mixins.boxShadow}
  }
`
