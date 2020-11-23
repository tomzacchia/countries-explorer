import React, { useEffect, useState } from "react";
import * as Styles from "./home-page.styles";
import API from "../../api";
// import COUNTRIES_MOCK from "./countries.mock-data";
import HomepageResults from "../../components/homepage-results/homepage-results";

const REGIONS = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const HomePage = () => {
  var [countries, setCountries] = useState("");
  var [searchKeyword, setSearchKeyword] = useState("");
  var [region, setRegion] = useState("");
  var [filteredCountries, setFilteredCountries] = useState("");

  // component did mount
  useEffect(() => {
    API.get("/all?fields=name;capital;alpha3Code;population;flag;region").then(
      ({ data }) => setCountries(data),
      console.error
    );
  }, []);

  // filter by search or dropdown
  useEffect(() => {
    if (!countries) return;

    setFilteredCountries("");

    var filteredCountries;

    if (!region && !searchKeyword) filteredCountries = countries;

    if (region) {
      filteredCountries = countries.filter((country) => {
        return country.region === region;
      });
    } else if (searchKeyword) {
      filteredCountries = countries.filter((country) => {
        return country.name.toLowerCase().includes(searchKeyword.toLowerCase());
      });
    }

    setFilteredCountries(filteredCountries);
  }, [searchKeyword, region, countries]);

  return (
    <Styles.DetailsContainer>
      <Styles.Form>
        <Styles.Label htmlFor="searchKeyword">
          <i className="fas fa-search"></i>
          <Styles.Input
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
        </Styles.Label>

        <Styles.Select
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
        </Styles.Select>
      </Styles.Form>

      <HomepageResults countries={filteredCountries} />
    </Styles.DetailsContainer>
  );
};

export default HomePage;
