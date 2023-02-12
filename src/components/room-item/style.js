import styled from "styled-components";


export const ItemWrapper = styled.div`
  width: ${props => props.width || '100%'};
  flex-shrink: 0;
  padding: 0 8px;
  .slider {
    position: relative;
    .control {
      position: absolute;
      z-index: 9;
      width: 100%;
      height: 100%;
      .btn {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 25%;
        height: 100%;
        color: transparent;
        &.right {
          right: 0;
        }
      }
    }
    &:hover {
      .btn {
        color: #fff;
        &.left {
          background: linear-gradient(to right, rgba(0,0,0,.25) 0, transparent 100%);
        }
        &.right {
          background: linear-gradient(to right, transparent 0, rgba(0,0,0,.25) 100%);
        }
      }
    }
  }
  .cover {
    position: relative;
    padding-top: 66%;
    overflow: hidden;
    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .desc {
    margin: 10px 0 5px;
    color: ${props => props.verifyColor || '#39576a'};
    font-weight: 700;
  }
  .name {
    font-size: 16px;
    font-weight: 700;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .price {
    margin: 8px 0;
  }
  .info {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    .MuiRating-decimal {
      margin-right: -2px;
      color: ${props => props.theme.color.secondaryColor};
    }
  }
`
