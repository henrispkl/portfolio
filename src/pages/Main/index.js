import React, { useState, useEffect, useCallback } from "react";
import classes from "./Main.module.css";

import Slider from "../../components/Slider/Slider";
import MainButton from "../../components/MainButton/MainButton";

const Main = props => {
  const [slideUp, setSlideUp] = useState(false);
  const [globalSlider, setGlobalSlider] = props.globalSlider();
  const { setMainPageLodaded } = props;

  const goToMainMenu = useCallback(() => {
    setGlobalSlider(props.history.push, "/menu");
    setSlideUp(true);
  }, [setGlobalSlider, setSlideUp, props.history.push]);

  useEffect(() => {
    return () => {
      setMainPageLodaded(true);
    };
  }, [setMainPageLodaded]);

  useEffect(() => {
    const scrollAction = e => {
      if (e.deltaY > 0 && !globalSlider.slide) {
        clearTimeout(delayScrollTimeout);
        goToMainMenu();
      }
    };

    // Bind the listener after the starting animation is complete
    const delayScrollTimeout = setTimeout(
      () => {
        document.addEventListener("wheel", scrollAction);
      },
      props.mainPageLoaded ? 0 : 4250
    );

    return () => {
      clearTimeout(delayScrollTimeout);
      document.removeEventListener("wheel", scrollAction);
    };
  }, [globalSlider.slide, goToMainMenu, props.mainPageLoaded]);

  const loadedStyle = {
    animation: "none",
    opacity: "1"
  };

  let mainTextClassNames = [classes.MainText];

  if (slideUp) {
    mainTextClassNames.push(classes.slideup);
  } else if (props.mainPageLoaded) {
    mainTextClassNames.push(classes.slidedown);
  }

  if (slideUp && props.mainPageLoaded) {
    mainTextClassNames = [classes.MainText, classes.slideup];
  }

  return (
    <div className={classes.Main}>
      <div className={mainTextClassNames.join(" ")}>
        <div className={classes.MainName}>
          {!props.mainPageLoaded && <Slider timein={750} />}
          <div
            style={props.mainPageLoaded ? loadedStyle : null}
            className={classes.inline}
          >
            Henrique
          </div>
          <div
            style={props.mainPageLoaded ? loadedStyle : null}
            className={[classes.bold, classes.inline].join(" ")}
          >
            Pereira
          </div>
        </div>
        <div className={classes.Desc}>
          <div className={classes.DescItem}>
            {!props.mainPageLoaded && <Slider timein={2500} />}
            <div
              className={classes.DescText}
              style={props.mainPageLoaded ? loadedStyle : null}
            >
              Front-end web developer
            </div>
          </div>
        </div>
        <MainButton
          style={props.mainPageLoaded ? loadedStyle : null}
          click={goToMainMenu}
        />
      </div>
    </div>
  );
};

export default Main;
