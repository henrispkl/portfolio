import React, { useState } from "react";
import classes from "./About.module.css";

import Back from "../../assets/svg/arrow_back.svg";
import Avatar from "../../assets/img/avatar.jpg";
import Skill from "../../components/Skill/Skill";

const About = props => {
  const [, setGlobalSlider] = props.globalSlider();
  const [animationOut, setAnimationOut] = useState(false);

  const goToMenu = () => {
    setGlobalSlider(props.history.push, "/menu", { vertical: false });
    setAnimationOut(true);
  };

  const goToProjects = () => {
    setGlobalSlider(props.history.push, "/projects", { vertical: false });
    setAnimationOut(true);
  };

  let contentClasses = [classes.Content];

  if (!animationOut) {
    contentClasses.push(classes.fadein);
  } else if (animationOut) {
    contentClasses.push(classes.fadeout);
  }

  return (
    <div className={classes.About}>
      <div className={classes.AboutMain}>
        <div className={classes.Back} onClick={goToMenu}>
          <img src={Back} alt="" />
        </div>
        <div className={contentClasses.join(" ")}>
          <div className={classes.Avatar}>
            <img src={Avatar} alt="" />
          </div>
          <h1>Hello World</h1>
          <br />
          <p>
            Hello, my name is Henrique! I am a front-end web developer from Brazil. The
            main technologies I use are React, Redux and JavaScript ES6. Having also some
            growing knowledge in UI/UX and back-end, I enjoy each aspect of building
            websites and single page web applications.
          </p>
          <br />
          <h3>My skills:</h3>
          <Skill name="HTML5" value="98" />
          <Skill name="CSS3" value="95" />
          <Skill name="JavaScript" value="90" />
          <Skill name="Bootstrap 4" value="90" />
          <Skill name="React" value="85" />
          <Skill name="Redux" value="80" />
          <Skill name="UX/UI" value="50" />
          <Skill name="PHP" value="45" />
          <br />
          <p>
            Being very hungry for knowledge, I try to learn about everything I can and try
            to always experience new challenges that test my skills and adds something
            more to what I already know. And when it comes to working professionally, this
            may sound cliche, but I truly love what I do!
          </p>
          <br />
          <p>
            Feel free to take a look at my latest projects on the{" "}
            <span className={classes.link} onClick={goToProjects}>
              portfolio page
            </span>
            . I'm also available for remote work, and you can contact me{" "}
            <a rel="noopener" href="mailto:henrisparkle@gmail.com">
              here
            </a>
            .
          </p>
          <br />
          <p>Let's work together? :)</p>
        </div>
      </div>
    </div>
  );
};

export default About;
