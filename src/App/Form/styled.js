import styled from "styled-components";

export const Fieldset = styled.fieldset`
    border: 1.5px solid ${({ theme }) => theme.color.teal};
    padding: 20px;
    border-radius: 3px;
    margin: 20px 0;
    width: 100%;
`;

export const Legend = styled.legend`
    color: ${({ theme }) => theme.color.white};
    background: ${({ theme }) => theme.color.teal};
    padding: 10px;
    border-radius: 3px;
`;

export const LabelText = styled.span`
    width: 100%;
    max-width: 130px;
    display: inline-block;
    margin-right: 5px;
    margin-bottom: 5px;
`;

export const FormField = styled.input`
    border: 1px solid ${({ theme }) => theme.color.teal};
    padding: 5px;
    width: 100%;
    max-width: 470px;
    border-radius: 3px;

    &:required {
        border: 2px solid ${({ theme }) => theme.color.teal};
    }
`;

export const Button = styled.button`
    width: 100%;
    border: none;
    padding: 10px;
    color: ${({ theme }) => theme.color.white};
    background: ${({ theme }) => theme.color.teal};
    border-radius: 3px;
    transition: filter 0.5s linear;

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
    }
`;

export const Footer = styled.p`
    font-family: "Arial", sans-serif;
    font-size: 12px;
    font-style: italic;
    text-align: center;
`;

export const Loading = styled.p`
    color: ${({ theme }) => theme.color.teal};
    text-align: center;
    line-height: 1.5;
    padding-top: 120px;
`;

export const Failure = styled.p`
    color: ${({ theme }) => theme.color.crimson};
    text-align: center;
    line-height: 1.5;
    padding: 100px;
`;