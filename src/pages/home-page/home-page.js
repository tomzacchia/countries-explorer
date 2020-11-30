import React, { useEffect, useState } from "react";
import * as Styles from "./home-page.styles";
import API from "../../api";
// import COUNTRIES_MOCK from "./countries.mock-data";
import HomepageResults from "../../components/homepage-results/homepage-results";
import ScrollToTopIcon from "../../components/scroll-to-top/scroll-to-top";
import useFilterCountries from "./useFilterCountries";

const REGIONS = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const HomePage = () => {
  var [countries, setCountries] = useState("");
  var [searchKeyword, setSearchKeyword] = useState("");
  var [region, setRegion] = useState("");
  var filteredCountries = useFilterCountries(region, searchKeyword, countries);

  useEffect(() => {
    API.get("all?fields=name;capital;alpha3Code;population;flag;region").then(
      ({ data }) => setCountries(data),
      console.error
    );
  }, []);

  function handleFormControlChange(value, type) {
    if (type === "region") {
      setSearchKeyword("");
      setRegion(value);
    } else {
      setRegion("");
      setSearchKeyword(value);
    }
  }

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
              handleFormControlChange(e.target.value, "");
            }}
          />
        </Styles.Label>

        <Styles.Select
          name="region"
          id="region"
          value={region}
          onChange={(e) => {
            handleFormControlChange(e.target.value, "region");
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

      <HomepageResults
        countries={filteredCountries ? filteredCountries : countries}
      />

      <ScrollToTopIcon iconClassName="fas fa-arrow-up" />
    </Styles.DetailsContainer>
  );
};

export default React.memo(HomePage);
