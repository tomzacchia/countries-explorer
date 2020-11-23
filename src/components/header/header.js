import React from "react";
import * as Styles from "./header.styles";
import { ButtonNoShadow } from "../../styles/buttons";

const Header = ({ toggleTheme, theme }) => {
  const iconClassname = theme === "light" ? "far fa-moon" : "fas fa-moon";

  return (
    <Styles.HeaderContainer>
      <Styles.HeaderTitle> Where in the world? </Styles.HeaderTitle>

      <ButtonNoShadow className="withIcon" onClick={toggleTheme}>
        <i className={iconClassname}></i>
        <p> Dark Mode </p>
      </ButtonNoShadow>
    </Styles.HeaderContainer>
  );
};

export default Header;
