import React, { useEffect, useState } from "react";
import * as Styles from "./home-page.styles";
import COUNTRIES_MOCK from "./countries.mock-data";

const REGIONS = ["Africa", "America", "Asia", "Europe", "Oceania"];

const HomePage = () => {
  var [countries, setCountries] = useState("");
  var [country, setCountry] = useState("");
  var [region, setRegion] = useState("all");

  useEffect(() => {
    setTimeout(() => {
      setCountries(COUNTRIES_MOCK);
    }, 1000);
  }, [countries, setCountries]);

  return (
    <Styles.DetailsContainer>
      <Styles.Form>
        <label htmlFor="country">
          <i className="fas fa-search"></i>
          <input
            type="text"
            name="country"
            id="country"
            placeholder="Search for a country..."
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </label>

        <select
          name="region"
          id="region"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          onBlur={(e) => setRegion(e.target.value)}
        >
          <option value="all"> Filter by Region </option>
          {REGIONS.map((region) => (
            <option value={region} key={region}>
              {region}
            </option>
          ))}
        </select>
      </Styles.Form>

      <Styles.DetailsContainer></Styles.DetailsContainer>
    </Styles.DetailsContainer>
  );
};

export default HomePage;
