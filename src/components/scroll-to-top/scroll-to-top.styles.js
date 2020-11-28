import styled from "styled-components";

const Icon = styled.i`
  padding: 1rem;
  background: ${({ theme }) => theme.elementBackgroundColor};
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  cursor: pointer;
`;

export default Icon;
