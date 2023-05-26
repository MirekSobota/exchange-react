import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
`;

export const Button = styled.button`
  width: 100%;
  background: rgb(0, 128, 128);
  color: white;
  border: none;
  border-radius: 10px;
  padding: 3px;

  &:hover {
    background: rgb(1, 102, 102);
  }

  &:active {
    background: rgb(1, 82, 82);
  }
`;
