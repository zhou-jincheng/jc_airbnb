import styled from "styled-components";


export const ItemWrapper = styled.div`
  width: ${props => props.width || '100%'};
  flex-shrink: 0;
  padding: 0 8px;
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
    align-items: c;
    font-size: 12px;
    font-weight: 600;
    .MuiRating-decimal {
      margin-right: -2px;
      color: ${props => props.theme.color.secondaryColor};
    }
  }
`
