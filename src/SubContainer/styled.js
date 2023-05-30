import styled from "styled-components";

export const Content = styled.div`
  max-width: 850px;
  width: auto;
  margin: auto;
  padding: 20px;
  border: solid 1px black;
  border-radius: 5px;
  background: ${({theme}) => theme.color.white};
  box-shadow: 1px 2px 2px;
`;