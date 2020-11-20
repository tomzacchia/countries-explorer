import React, { useEffect, useState } from "react";
import * as Styles from "./home-page.styles";
import COUNTRIES_MOCK from "./countries.mock-data";

const REGIONS = ["Africa", "America", "Asia", "Europe", "Oceania"];

const HomePage = () => {
  var [countries, setCountries] = useState("");
  var [searchKeyword, setSearchKeyword] = useState("");
  var [region, setRegion] = useState("all");
  var [filteredCountries, setFilteredCountries] = useState("");

  // component did mount
  useEffect(() => {
    setTimeout(() => {
      setCountries(COUNTRIES_MOCK);
    }, 1000);
  }, []);

  // filter by search or dropdown
  useEffect(() => {
    if (!countries) return;

    setFilteredCountries("");

    var filteredCountries;

    if (region) {
      filteredCountries = countries.filter((country) => {
        return country.region === region;
      });
    } else {
      filteredCountries = countries.filter((country) => {
        return country.name.toLowerCase().includes(searchKeyword.toLowerCase());
      });
    }

    setFilteredCountries(filteredCountries);
  }, [searchKeyword, region, countries, setSearchKeyword, setRegion]);

  return (
    <Styles.DetailsContainer>
      <Styles.Form>
        <label htmlFor="searchKeyword">
          <i className="fas fa-search"></i>
          <input
            type="text"
            name="cosearchKeyworduntry"
            id="searchKeyword"
            placeholder="Search for a country..."
            value={searchKeyword}
            onChange={(e) => {
              setSearchKeyword(e.target.value);
              setRegion("");
            }}
          />
        </label>

        <select
          name="region"
          id="region"
          value={region}
          onChange={(e) => {
            setRegion(e.target.value);
            setSearchKeyword("");
          }}
          onBlur={(e) => {
            setRegion(e.target.value);
            setSearchKeyword("");
          }}
        >
          <option value=""> Filter by Region </option>
          {REGIONS.map((region) => (
            <option value={region} key={region}>
              {region}
            </option>
          ))}
        </select>
      </Styles.Form>

      <Styles.DetailsContainer>
        {filteredCountries.map((country) => (
          <div
            key={country.name}
          >{`${country.name} ${country.capital} ${country.population}`}</div>
        ))}
      </Styles.DetailsContainer>
    </Styles.DetailsContainer>
  );
};

export default HomePage;
