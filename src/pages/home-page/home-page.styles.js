import styled from "styled-components";
import mediaQueries from "../../styles/breakpoints";

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  ${mediaQueries.md`
    flex-direction: row;
    justify-content: space-between;
  `}
`;

export const Label = styled.label`
  padding: 12px 2rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.elementBackgroundColor};
`;

export const Input = styled.input`
  margin-left: 1rem;
  width: 90%;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.text};

  &::placeholder {
    color: ${({ theme }) => theme.text};
  }

  &:focus {
    outline: none;
  }

  &::after {
    position: absolute;
    right: 12px;
    color: ${({ theme }) => theme.text};
  }

  ${mediaQueries.md`
    width: 200px;
  `}
`;

export const Select = styled.select`
  margin-top: 2rem;
  padding: 12px 6px;
  width: 175px;
  background-color: ${({ theme }) => theme.elementBackgroundColor};
  color: ${({ theme }) => theme.text};
  border: none;
  border-radius: 6px;

  ${mediaQueries.md`
    margin-top: 0;
  `}
`;
