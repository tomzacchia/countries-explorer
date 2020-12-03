import styled from "styled-components";
import mediaQueries from "../../styles/breakpoints";

export const PageContainer = styled.div`
  padding: 50px;
  padding-top: 50px;
`;

export const IconContainer = styled.div`
  width: max-content;
  position: absolute;
  top: 125px;
  left: 50px;
`;

export const LoadingMessage = styled.h1`
  margin-left: -25px;
  position: fixed;
  width: 50px;
  top: 50%;
  left: 50%;
`;

export const DetailsContainer = styled.div`
  margin-top: 6rem;
  display: flex;
  flex-direction: column;

  ${mediaQueries.lg`
    flex-direction: row;
  `}
`;

export const Title = styled.h2`
  margin-bottom: 1rem;
`;

export const InfoContainer = styled.div`
  margin-top: 2rem;

  span {
    font-weight: bold;
  }

  ${mediaQueries.lg`
    margin-top: 0;
    margin-left: 4rem;
  `}
`;

export const FlagImgContainer = styled.div`
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;

  ${mediaQueries.lg`
  height: 300px;
  width: 400px;
  `}
`;

export const UnorderedListsContainer = styled.div`
  display: flex;

  ul {
    list-style: none;
  }

  ul span {
    font-weight: bold;
  }

  ul:nth-child(2) {
    margin-left: 2rem;
  }
`;

export const BorderCountriesCardsContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;

  p {
    width: 150px;
  }

  button {
    margin: 0.5rem 1rem 0.5rem 0;
    width: 75px;
  }
`;
