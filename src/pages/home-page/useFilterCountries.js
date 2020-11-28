const { useState, useEffect } = require("react");

function useFilterCountries(region, searchKeyword, countries) {
  var [filteredCountries, setFilteredCountries] = useState("");

  useEffect(() => {
    if (!countries || (!region && !searchKeyword)) {
      setFilteredCountries(countries);
      return;
    }

    var filteredCountries = [...countries];

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
  }, [region, searchKeyword, countries]);

  return filteredCountries;
}

export default useFilterCountries;
