import styled from "styled-components";


export const DemoWrapper = styled.div`
  width: 200px;
  .control {
    display: flex;
    justify-content: space-between;
  }
  .item {
    width: 40px;
    text-align: center;
    border: 1px solid #ccc;
    &.active {
      color: red;
    }
  }
`
