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
              <div></div>
            </div>
          </div>
        </div>
      )}
    </Styles.Container>
  );
};

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
    mainInfo: [nativeName, formattedPopulation, region, subregion, capital],
    additionalInfo: [topLevelDomain[0], currencies, languages],
    borders,
  };
}

export default Details;
