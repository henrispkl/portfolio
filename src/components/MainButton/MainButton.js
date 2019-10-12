import React from "react";
import Icon from "../../assets/svg/arrow_down.svg";
import classes from "./MainButton.module.css";

const MainButton = props => {
  return (
    <div className={classes.MainButton} style={props.style}>
      <img src={Icon} className={classes.Icon} onClick={props.click} alt="" />
    </div>
  );
};

export default MainButton;
