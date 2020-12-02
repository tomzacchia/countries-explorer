import React, { useEffect, useState } from "react";
import API from "../../api";
import PreviousRouteButton from "../../components/previous-route-button/previous-route-button";
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
    <Styles.Container>
      <Styles.IconContainer>
        <PreviousRouteButton message="Back" />
      </Styles.IconContainer>

      {!country ? (
        <h1>Loading</h1>
      ) : (
        <div>
          {/* section 1: flag */}
          <div> FLAG </div>
          {/* section 2: information and borders */}
          <div>
            <h2> {country.name} </h2>
            {/* name, region, currencies etc... */}
            <div>
              <ul>{country.mainInfo.map(makeListItemMarkup)}</ul>
              <ul>
                {country.additionalInfo.map(makeAdditionalInfoListItemMarkup)}
              </ul>
              <ul></ul>
            </div>
            {/* border country links */}
            <div>
              <p>
                <span>
                  {capitalizeSpaceSeparatedWords("border countries: ")}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </Styles.Container>
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
