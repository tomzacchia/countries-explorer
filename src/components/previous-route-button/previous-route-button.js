import React from "react";
import { navigate } from "@reach/router";
import { Button } from "../../styles/buttons";

function ButtonWithNavigation({ message, routeURL, hasIcon, iconClassName }) {
  function handleClick() {
    navigate(routeURL);
  }

  return (
    <Button className="withIcon" onClick={handleClick}>
      {hasIcon && <i className={iconClassName}></i>}
      <p> {message} </p>
    </Button>
  );
}

export default ButtonWithNavigation;
