import React, { useState, useEffect, useCallback } from "react";
import classes from "./Menu.module.css";

import Link from "../../components/WordMapLink/WordMapLink";
import BackArrow from "../../assets/svg/arrow_s_left.svg";

const Menu = props => {
  const [globalSlider, setGlobalSlider] = props.globalSlider();
  const [animationOut, setAnimationOut] = useState(false);

  const goToMainPage = useCallback(() => {
    setGlobalSlider(props.history.push, "/", { reverse: true });
    setAnimationOut(true);
  }, [setGlobalSlider, setAnimationOut, props.history.push]);

  const goToAboutPage = () => {
    setGlobalSlider(props.history.push, "/about", { vertical: false, reverse: true });
    setAnimationOut(true);
  };

  const goToProjectsPage = () => {
    setGlobalSlider(props.history.push, "/projects", { vertical: false });
    setAnimationOut(true);
  };

  const projectsLink = <Link click={goToProjectsPage}>my-projects</Link>;
  const aboutLink = <Link click={goToAboutPage}>about-me</Link>;
  const githubLink = (
    <Link newtab href="https://github.com/henrispkl">
      github
    </Link>
  );
  const contactLink = <Link href="mailto:henrisparkle@gmail.com">contact-me</Link>;

  useEffect(() => {
    const scrollAction = e => {
      if (e.deltaY < 0 && !globalSlider.slide) {
        goToMainPage();
      }
    };

    document.addEventListener("wheel", scrollAction);

    return () => {
      document.removeEventListener("wheel", scrollAction);
    };
  }, [globalSlider.slide, goToMainPage]);

  let wordMapClasses = [classes.WordMap];

  if (!animationOut) {
    wordMapClasses.push(classes.fadein);
  } else if (animationOut) {
    wordMapClasses.push(classes.fadeout);
  }

  return (
    <div className={classes.Menu}>
      <div className={classes.Back} onClick={goToMainPage}>
        <img src={BackArrow} alt=""/>
      </div>
      <div className={wordMapClasses.join(" ")}>
        <p
          className={classes.removable}
        >{`for(const i=0;i<projectTags.length;i++){const`}</p>
        <p>
          {`element=`}
          {projectsLink}
          {`[i];let tags=element.innerText`}
        </p>
        <p
          className={classes.removable}
        >{`.split(",");element.innerText="";tags.forEach`}</p>
        <p
          className={classes.removable}
        >{`(e=>{let tag=document.createElement("div");`}</p>
        <p>
          {`tag.className="project-tag";`}
          {aboutLink}
          {`.innerHTML=`}
        </p>
        <p>{`'<i class="f-tag"></i>'+e;element.appendChild(tag);`}</p>
        <p>
          {`projectList.`}
          {githubLink}
          {`=[];for(const i=0;i<project.length;`}
        </p>
        <p
          className={classes.removable}
        >{`i++){element.value=project[i];let originalHeight=`}</p>
        <p className={classes.removable}>{`element.offsetHeight+32;`}</p>
        <p>
          {`e.h[`}
          {contactLink}
          {`].pop();`}
          <span className={[classes.Cursor, classes.Cursor1].join(" ")}></span>
        </p>
        <p className={classes.removable}>
          {`let children=element.children;finalHeight+=16;`}
          <span className={[classes.Cursor, classes.Cursor2].join(" ")}></span>
        </p>
      </div>
    </div>
  );
};

export default Menu;
