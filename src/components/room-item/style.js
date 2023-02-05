import styled from "styled-components";


export const ItemWrapper = styled.div`
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
    }
  }
  .desc {
    margin: 10px 0 5px;
    color: #767676;
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
    font-size: 12px;
    font-weight: 600;
  }
`
