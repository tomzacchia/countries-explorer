import React from "react";
import { navigate } from "@reach/router";
import { Button } from "../../styles/buttons";
import styled from "styled-components";

const NavigationButtons = styled(Button)`
  background-color: ${({ theme }) => theme.elementBackgroundColor};
`;

function ButtonWithNavigation({ children, routeURL, hasIcon, iconClassName }) {
  function handleClick() {
    navigate(routeURL);
  }

  return (
    <NavigationButtons className="withIcon" onClick={handleClick}>
      {hasIcon && <i className={iconClassName}></i>}
      <p style={{ width: "100%", textAlign: "center" }}> {children} </p>
    </NavigationButtons>
  );
}

export default ButtonWithNavigation;
