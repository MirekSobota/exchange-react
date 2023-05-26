import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
`;

export const Button = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.color.teal};
  color: ${({ theme }) => theme.color.white};
  border: none;
  border-radius: 10px;
  padding: 3px;

  &:hover {
    background: ${({ theme }) => theme.color.blueStone};
  }

  &:active {
    background: ${({ theme }) => theme.color.sherpaBlue};
  }
`;
