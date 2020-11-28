import React from "react";
import { navigate } from "@reach/router";
import { Button } from "../../styles/buttons";

function PreviousRouteButton({ message }) {
  return (
    <Button className="withIcon" onClick={() => navigate(-1)}>
      <i className="fas fa-arrow-left"></i>
      <p> {message} </p>
    </Button>
  );
}

export default PreviousRouteButton;
