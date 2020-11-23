import React from "react";
import PreviousRouteButton from "../../components/previous-route-button/previous-route-button";
import * as Styles from "./details.styles";

const Details = () => {
  return (
    <div>
      <Styles.IconContainer>
        <PreviousRouteButton message="Back" />
      </Styles.IconContainer>

      <div></div>
    </div>
  );
};

export default Details;
