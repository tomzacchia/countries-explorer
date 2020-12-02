import React from "react";
import { navigate } from "@reach/router";
import { Button } from "../../styles/buttons";

function ButtonWithNavigation({ children, routeURL, hasIcon, iconClassName }) {
  function handleClick() {
    navigate(routeURL);
  }

  return (
    <Button className="withIcon" onClick={handleClick}>
      {hasIcon && <i className={iconClassName}></i>}
      <p style={{ width: "100%", textAlign: "center" }}> {children} </p>
    </Button>
  );
}

export default ButtonWithNavigation;
