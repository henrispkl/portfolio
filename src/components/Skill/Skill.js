import React, { useState } from "react";
import classes from "./Skill.module.css";
import VisibilitySensor from "react-visibility-sensor";

const Skill = props => {
  const [visible, setVisible] = useState(false);

  function onChange(isVisible) {
    isVisible && setVisible(true);
  }

  return (
    <VisibilitySensor onChange={onChange}>
      <div
        className={(visible
          ? [classes.Skill]
          : [classes.Skill, classes.transparent]
        ).join(" ")}
      >
        <div className={classes.Name}>{props.name}</div>
        <div className={classes.Bar}>
          <div
            className={classes.Progress}
            style={{ width: visible ? props.value + "%" : "0px" }}
          >
            <div className={classes.ProgressText}>{props.value + "%"}</div>
          </div>
        </div>
      </div>
    </VisibilitySensor>
  );
};

export default Skill;
