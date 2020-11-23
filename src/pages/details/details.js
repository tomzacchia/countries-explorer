import React, { useEffect, useState } from "react";
import API from "../../api";
import PreviousRouteButton from "../../components/previous-route-button/previous-route-button";
import * as Styles from "./details.styles";

const Details = ({ alphaCode }) => {
  var [country, setCountry] = useState("");

  useEffect(() => {
    API.get(`alpha/${alphaCode}`).then(
      ({ data }) => setCountry(data),
      console.error
    );
  }, []);

  return (
    <div>
      <Styles.IconContainer>
        <PreviousRouteButton message="Back" />
      </Styles.IconContainer>

      <div>{!country ? <h1>Loading</h1> : <h1>{country.name}</h1>}</div>
    </div>
  );
};

export default Details;
