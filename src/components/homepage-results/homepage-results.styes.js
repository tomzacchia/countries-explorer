import styled from "styled-components";
import mediaQueries from "../../styles/breakpoints";

export const Results = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${mediaQueries.md`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  `}
`;

export const CountryContainer = styled.div`
  margin: 2rem 0;
  width: 80%;
  display: flex;
  flex-direction: column;
  flex: none;
  background-color: ${({ theme }) => theme.elementBackgroundColor};
  cursor: pointer;

  ${mediaQueries.md`
    width: 30%;
  `}
`;

export const DivImgBg = styled.div`
  width: 100%;
  height: 150px;
  background-size: cover;
  background-position: center;
`;

export const InfoContainer = styled.div`
  padding: 2rem;

  & p {
    font-size: 14px;
  }
`;

export const Title = styled.h3`
  margin-bottom: 1rem;
`;

export const TextBold = styled.span`
  font-weight: bold;
`;
