import styled from "styled-components";

export const Button = styled.button`
  border: none;
  padding: 6px 12px;
  display: flex;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  box-shadow: 1px 1px 13px 1px #000000;

  &:focus {
    outline: none;
  }

  &.withIcon {
    i {
      margin-right: 6px;
    }
  }
`;

export const ButtonNoShadow = styled(Button)`
  box-shadow: none;
`;
