import styled from "styled-components";


export const RoomsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -8px;
  .list-item {
    width: ${props => props.roomWidth};
    padding: 8px;
  }
`
