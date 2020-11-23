import React from "react";
import Icon from "./scroll-to-top.styles";

function ScrollToTopIcon({ iconClassName }) {
  function clickHandler() {
    window.scrollTo(0, 0);
  }

  return <Icon className={iconClassName} onClick={clickHandler}></Icon>;
}

export default ScrollToTopIcon;
