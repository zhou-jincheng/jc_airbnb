import styled from 'styled-components'

export const CenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 48px;
  .search-bar {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    height: 48px;
    padding: 8px;
    border: 1px solid ${props => props.theme.color.borderColor};
    border-radius: 24px;
    cursor: pointer;
    box-shadow: 0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%);
    ${props => props.theme.mixins.boxShadow}
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
  }

  .search-detail {
    .infos {
      margin-top: 8px;
    }
  }

  /* 动画 */
  .detail-enter {
    opacity: 0;
    transform: scale(0.353, 0.75) translateY(-58px);
  }
  .detail-enter-active {
    opacity: 1;
    transform: scale(1.0) translateY(0);
    transition: all 250ms ease;
  }
  .detail-exit {
    opacity: 1;
    transform: scale(1.0) translateY(0);
  }
  .detail-exit-active {
    opacity: 0;
    transform: scale(0.353, 0.75) translateY(-58px);
    transition: all 250ms ease;
  }
  .bar-enter {
    opacity: 0;
    transform: scale(2.833, 1.333) translateY(58px);
  }
  .bar-enter-active {
    opacity: 1;
    transform: scale(1.0) translateY(0);
    transition: all 250ms ease;
  }
  .bar-exit {
    opacity: 0;
  }
`
