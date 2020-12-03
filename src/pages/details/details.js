import React, { useEffect, useState } from "react";
import API from "../../api";
import ButtonWithNavigation from "../../components/button-with-navigation/button-with-navigation";
import * as Styles from "./details.styles";

const Details = ({ alphaCode }) => {
  var [country, setCountry] = useState("");

  useEffect(() => {
    API.get(`alpha/${alphaCode}`).then(
      ({ data }) => setCountry(countryDataMap(data)),
      console.error
    );
  }, [alphaCode]);

  return (
    <Styles.PageContainer>
      <Styles.IconContainer>
        <ButtonWithNavigation
          routeURL="/"
          hasIcon
          iconClassName="fas fa-arrow-left"
        >
          back
        </ButtonWithNavigation>
      </Styles.IconContainer>

      {!country ? (
        <Styles.LoadingMessage>Loading</Styles.LoadingMessage>
      ) : (
        <Styles.DetailsContainer>
          <Styles.FlagImgContainer
            style={{ backgroundImage: `url(${country.flag})` }}
          ></Styles.FlagImgContainer>

          <Styles.InfoContainer>
            <Styles.Title> {country.name} </Styles.Title>

            <Styles.UnorderedListsContainer>
              <ul>{country.mainInfo.map(makeListItemMarkup)}</ul>
              <ul>
                {country.additionalInfo.map(makeAdditionalInfoListItemMarkup)}
              </ul>
            </Styles.UnorderedListsContainer>

            <Styles.BorderCountriesCardsContainer>
              <p>
                <span>
                  {capitalizeSpaceSeparatedWords("border countries: ")}
                </span>
              </p>
              {country.borders.map(makeBorderCardMarkup)}
            </Styles.BorderCountriesCardsContainer>
          </Styles.InfoContainer>
        </Styles.DetailsContainer>
      )}
    </Styles.PageContainer>
  );
};

export default Details;

//** info: {label: string, value: string | array<{name}>} */
function makeListItemMarkup(info) {
  return (
    <li key={info.label}>
      <p>
        <span>{capitalizeSpaceSeparatedWords(info.label)}: </span>
        {info.value}
      </p>
    </li>
  );
}

//** infoObj: {label: string, type: string, value: array[strings]} */
function makeAdditionalInfoListItemMarkup(infoObj) {
  var length = infoObj.values.length - 1;
  return (
    <li key={infoObj.label}>
      <p>
        <span>{capitalizeSpaceSeparatedWords(infoObj.label)}: </span>
        {infoObj.values.map((value, index) => {
          return value + (index !== length ? ", " : "");
        })}
      </p>
    </li>
  );
}

//** countryName: string */
function makeBorderCardMarkup(alpha3Cpde) {
  return (
    <ButtonWithNavigation routeURL={`/details/${alpha3Cpde}`} key={alpha3Cpde}>
      {alpha3Cpde}
    </ButtonWithNavigation>
  );
}

function countryDataMap(country) {
  var {
    name,
    flag,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders = [],
  } = country;

  var formattedPopulation = population
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  var extractedCurrencyNames = currencies.map(extractNameValueFromObj);
  var extractedLanguageNames = languages.map(extractNameValueFromObj);

  return {
    name,
    flag,
    mainInfo: [
      { label: "native name", value: nativeName },
      { label: "population", value: formattedPopulation },
      { label: "region", value: region },
      { label: "sub region", value: subregion },
      { label: "capital", value: capital },
    ],
    additionalInfo: [
      {
        label: "top level domain",
        values: [topLevelDomain[0]],
      },
      {
        label: "currencies",
        values: extractedCurrencyNames,
      },
      { label: "language", values: extractedLanguageNames },
    ],
    borders,
  };
}

function extractNameValueFromObj(obj) {
  return obj.name;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function capitalizeSpaceSeparatedWords(str) {
  return str.split(" ").map(capitalize).join(" ");
}
