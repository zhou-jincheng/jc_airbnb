import styled from "styled-components";


export const ItemWrapper = styled.div`
  width: 20%;
  flex-shrink: 0;
  padding: 0 8px;
 .inner {
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    img {
      width: 100%;
    }
    .cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 40%;
      bottom: 0;
      background: linear-gradient(-180deg, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, .6) 100%);
    }
    .info {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 24px;
      color: #fff;
      text-align: center;
      .city {
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 4px;
      }
    }
 }
`
