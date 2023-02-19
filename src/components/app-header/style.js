import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  z-index: 99;
  &.fixed {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
  }
  .content {
    position: relative;
    z-index: 99;
    background-color: rgba(255, 255, 255, ${props => props.theme.isAlpha ? 0 : 1});
    border-bottom: 1px solid ${props => props.theme.isAlpha ? 'transparent' : '#eee'};
    transition: all 250ms ease;
    .top {
      display: flex;
      align-items: center;
      height: 80px;
    }
  }
  > .cover {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 9;
    background-color: rgba(0, 0, 0, .3);
  }
`

export const SearchAreaWrapper = styled.div`
  height: ${props => props.isSearch ? '100px' : 0};
  background-color: rgba(255, 255, 255, ${props => props.theme.isAlpha ? 0 : 1});
  transition: all 250ms ease;
`
