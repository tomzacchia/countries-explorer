import React from "react";
import * as Styles from "./header.styles";
import { Button } from "../../styles/buttons";

const Header = ({ toggleTheme }) => {
  return (
    <Styles.HeaderContainer>
      <h3> Where in the world? </h3>

      <Button onClick={toggleTheme}>
        <i></i>
        <p> Dark Mode </p>
      </Button>
    </Styles.HeaderContainer>
  );
};

export default Header;
