import React from "react";
import Proptypes from "prop-types";
import * as Styles from "./homepage-results.styes";
import { navigate } from "@reach/router";

const HomepageResults = ({ countries }) => {
  return (
    <Styles.Results>
      {countries.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        countries.map((country) => (
          <Styles.CountryContainer
            key={country.name}
            onClick={() => {
              navigate(`/details/${country.alpha3Code}`);
            }}
          >
            <Styles.DivImgBg
              style={{ backgroundImage: `url("${country.flag}")` }}
            ></Styles.DivImgBg>

            <Styles.InfoContainer>
              <Styles.Title>{country.name}</Styles.Title>

              <p>
                <Styles.TextBold>Population: </Styles.TextBold>
                {country.population
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </p>
              <p>
                <Styles.TextBold>Region: </Styles.TextBold> {country.region}
              </p>
              <p>
                <Styles.TextBold>Capital: </Styles.TextBold> {country.capital}
              </p>
            </Styles.InfoContainer>
          </Styles.CountryContainer>
        ))
      )}
    </Styles.Results>
  );
};

HomepageResults.proptype = {
  countries: Proptypes.arrayOf({
    flag: Proptypes.string,
    name: Proptypes.string,
    alpha3Code: Proptypes.string,
    capital: Proptypes.string,
    region: Proptypes.string,
    population: Proptypes.number,
  }),
};

export default HomepageResults;
