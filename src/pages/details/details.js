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
          <div> FLAG </div>
          <div>
            <h2> NAME </h2>
            <div>
              <ul>{country.mainInfo.map(makeListItemMarkup)}</ul>
              {/* <ul>{country.additionalInfo.map(makeListItemMarkup)}</ul> */}
            </div>
          </div>
        </div>
      )}
    </Styles.Container>
  );
};

export default Details;

//** information: {label: string, value: string | array} */
function makeListItemMarkup(info) {
  return (
    <li key={info.label}>
      <span key={info.label}>{capitalizeSpaceSeparatedWords(info.label)}:</span>{" "}
      {info.value}
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
      { label: "top level domain", value: topLevelDomain[0] },
      { label: "currencies", value: currencies },
      { label: "language", value: languages },
    ],
    borders,
  };
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function capitalizeSpaceSeparatedWords(str) {
  return str.split(" ").map(capitalize).join(" ");
}
