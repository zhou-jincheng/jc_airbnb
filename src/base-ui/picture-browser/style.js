import styled from "styled-components";


export const BrowserWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #333333;
  display: flex;
  flex-direction: column;
  .top {
    position: relative;
    height: 86px;
    .btn-close {
      position: absolute;
      top: 12px;
      right: 12px;
      cursor: pointer;
    }
  }
  .slider {
    flex: 1;
    position: relative;
    display: flex;
    justify-content: center;
    .controls {
      color: #fff;
      .btn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        &.left {
          left: 0;
        }
        &.right {
          right: 0;
        }
      }
    }
    .picture {
      position: relative;
      height: 100%;
      overflow: hidden;
      width: 100%;
      max-width: 105vh;
      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 100%;
        margin: 0 auto;
        user-select: none;
        &.image-enter {
          transform: translateX(${props => props.isNext ? '100%' : '-100%'});
          opacity: 0;
        }
        &.image-enter-active {
          transition: all 200ms ease;
          transform: translateX(0);
          opacity: 1;
        }
        &.image-exit {
          opacity: 1;
        }
        &.image-exit-active {
          opacity: 0;
          transition: opacity 200ms ease;
        }
      }
    }
  }
  .preview {
    height: 100px;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    .info {
      position: absolute;
      bottom: 10px;
      max-width: 105vh;
      color: #fff;
      .desc {
        display: flex;
        justify-content: space-between;
      }
      .list {
        margin-top: 3px;
        transition: height 200ms ease-in;
        height: ${props => props.hide ? 0 : '67px'};
        overflow: hidden;
        .item {
          margin-right: 15px;
          cursor: pointer;
          img {
            height: 67px;
            opacity: 0.5;
            &.active {
              opacity: 1;
            }
          }
        }
      }
    }
  }
`
