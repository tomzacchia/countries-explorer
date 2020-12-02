import styled from "styled-components";

export const PageContainer = styled.div`
  padding: 50px;
  padding-top: 50px;
`;

export const IconContainer = styled.div`
  width: max-content;
  position: fixed;
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
`;

export const Title = styled.h2`
  margin-bottom: 1rem;
`;

export const InfoContainer = styled.div`
  margin-left: 4rem;

  span {
    font-weight: bold;
  }
`;

export const FlagImgContainer = styled.div`
  height: 300px;
  width: 400px;
  background-size: cover;
  background-position: center;
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

  button {
    margin: 0 0.5rem;
    width: 75px;
  }
`;
