import styled from "styled-components";


export const PicturesWrapper = styled.div`
  position: relative;
  .pictures {
    display: flex;
    height: 600px;

    .left, .right{
      width: 50%;
      height: 100%;
      .item {
        position: relative;
        height: 100%;
        overflow: hidden;
        cursor: pointer;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;

          transition: transform 300ms ease-in;
        }

        &:hover {
          img {
            transform: scale(1.08);
          }
        }
      }
    }
    .right {
      display: flex;
      flex-wrap: wrap;
      .item {
        width: 50%;
        height: 50%;
        border: 1px solid #000;
      }
    }

    .cover {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(0, 0, 0, .3);
      opacity: 0;
      transition: opacity 200ms ease;
    }

    &:hover {
      .cover {
        opacity: 1;
      }
      .item:hover {
        .cover {
          opacity: 0;
        }
      }
    }
  }
  >.btn {
    position: absolute;
    right: 10px;
    bottom: 10px;
    padding: 6px 15px;
    background-color: #fff;
    border-radius: 4px;
    cursor: pointer;
  }
`
