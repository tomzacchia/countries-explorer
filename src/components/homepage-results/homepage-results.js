import React from "react";

// {
//   name: "Afghanistan",
//   alpha3Code: "AFG",
//   capital: "Kabul",
//   region: "Asia",
//   population: 27657145,
// }

const HomepageResults = ({ countries }) => {
  return (
    <div>
      {countries.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        countries.map((country) => (
          <div key={country.name}>
            <img src={country.flag} alt={country.name} />
            <div>
              <h3>{country.name}</h3>

              <p>
                <span>Population:</span> {country.population}
              </p>
              <p>
                <span>Region:</span> {country.region}
              </p>
              <p>
                <span>Capital :</span> {country.capital}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default HomepageResults;
