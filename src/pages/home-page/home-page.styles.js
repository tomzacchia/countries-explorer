import styled from "styled-components";

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  padding: 6px 2rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.elementBackgroundColor};
`;

export const Input = styled.input`
  margin-left: 1rem;
  width: 90%;
  border: none;
  background-color: transparent;
  color: white;

  &::placeholder {
    color: ${({ theme }) => theme.text};
  }
`;

export const CountriesContainer = styled.div`
  display: flex;
`;
