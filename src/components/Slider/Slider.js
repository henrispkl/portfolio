import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import classes from "./Slider.module.css";

const Slider = props => {
  const [sliderAnimation, setSliderAnimation] = useState(false);

  useEffect(() => {
    // Slide In
    setTimeout(() => {
      setSliderAnimation(true);
    }, props.timein);

    // Slide out
    setTimeout(() => {
      setSliderAnimation(false);
    }, props.timein + 750);
  }, [props.timein]);

  const SliderClassNames = {
    enter: props.vertical ? classes.SlideInY : classes.SlideInX,
    enterActive: props.vertical ? classes.SlideInYActive : classes.SlideInXActive,
    enterDone: props.vertical ? classes.SlideInYDone : classes.SlideInXDone,
    exit: props.vertical ? classes.SlideOutY : classes.SlideOutX,
    exitActive: props.vertical ? classes.SlideOutYActive : classes.SlideOutXActive,
    exitDone: props.vertical ? classes.SlideOutYDone : classes.SlideOutXDone
  };

  const SliderReverseClassNames = {
    enter: props.vertical ? classes.SlideInYReverse : classes.SlideInXReverse,
    enterActive: props.vertical
      ? classes.SlideInYReverseActive
      : classes.SlideInXReverseActive,
    enterDone: props.vertical ? classes.SlideInYReverseDone : classes.SlideInXReverseDone,
    exit: props.vertical ? classes.SlideOutYReverse : classes.SlideOutXReverse,
    exitActive: props.vertical
      ? classes.SlideOutYReverseActive
      : classes.SlideOutXReverseActive,
    exitDone: props.vertical ? classes.SlideOutYReverseDone : classes.SlideOutXReverseDone
  };

  const sliderClasses = [
    classes.Slider,
    props.round && classes.round,
    props.fixed && classes.fixed
  ];

  return (
    <CSSTransition
      in={sliderAnimation}
      timeout={750}
      classNames={props.reverse ? SliderReverseClassNames : SliderClassNames}
      mountOnEnter
      unmountOnExit
    >
      {state => <div className={sliderClasses.join(" ")}></div>}
    </CSSTransition>
  );
};

export default Slider;
