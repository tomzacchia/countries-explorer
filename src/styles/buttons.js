import styled from "styled-components";

export const Button = styled.button`
  border: none;
  padding: 6px 12px;
  background-color: transparent;
  color: ${({ theme }) => theme.text};

  &:focus {
    outline: none;
  }
`;

export const ButtonWithShadow = styled(Button)`
  box-shadow: 1px 1px 13px 1px #000000;
`;
