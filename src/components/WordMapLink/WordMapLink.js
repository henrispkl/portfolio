import React from "react";
import classes from "./WordMapLink.module.css";

const WordMapLink = props => {
  return (
    <span className={classes.WordMapLink} onClick={props.click}>
      {props.href ? (
        <a rel="noopener" target={props.newtab && "_blank"} href={props.href}>
          {props.children}
        </a>
      ) : (
        props.children
      )}
    </span>
  );
};

export default WordMapLink;
