import styled from "styled-components";


export const RoomsWrapper = styled.div`
  position: relative;
  margin-top: 120px;
  padding: 30px 20px;

  .title {
    margin: 0 0 10px 10px;
    font-size: 22px;
    font-weight: 700;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
  }
  > .cover {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(255, 255, 255, .8);
  }
`
