import React, { useState } from "react";
import classes from "./Projects.module.css";

import Project from "../../components/Project/Project";
import Forward from "../../assets/svg/arrow_forward.svg";

const projects = {
  tempest: {
    folder: "tempest",
    name: "Tempest Design",
    overview: "A simple mockup website of a fictional design agency.",
    tags: ["HTML5", "CSS3", "CSS Animations", "JavaScript", "Bootstrap 4"],
    link: "/tempest",
    images: 3
  },
  intelliapp: {
    folder: "intelliapp",
    name: "IntelliApp Landing Page",
    overview: "A mockup landing page website of a fictional company.",
    tags: ["HTML5", "CSS3", "JavaScript", "CSS Animations", "Landing Page"],
    link: "/intelliapp",
    images: 4
  },
  motionflow: {
    folder: "motionflow",
    name: "MotionFlow",
    overview:
      "A project where I built many pages to be populated with content by the client. All the pages are totally responsive and have custom CSS animations for the navigation bar, custom tab elements, progress bars, image animations at the main page and more.",
    tags: ["HTML5", "CSS3", "JavaScript", "jQuery", "Custom CSS Animations"],
    images: 5,
    videos: [
      "Showcasing the animations of each page",
      "Showcasing some of the responsiveness of the pages",
      "Navbar animations"
    ],
    link: '/motionflow'
  },
  motionflowDashboard: {
    folder: "motionflow-dashboard",
    name: "MotionFlow Dashboard",
    overview:
      "A user dashboard for MotionFlow. It was built with some CSS animations, dynamic content loading with AJAX and Chart.js for the graphs.",
    tags: ["HTML5", "CSS3", "JavaScript", "jQuery", "AJAX", "Chart.js"],
    images: 1,
    videos: ["Showcase of the dashboard"]
  },
  medicare: {
    folder: "medicare",
    name: "Medicare",
    overview: "A fictional freelancing platform for healthcare workers. It uses the MERN stack and has a simple CRUD for jobs and professionals. It also has a simple JWT authentication for user login/registration.",
    tags: ["React", "Node", "Express", "MongoDB", "Redux",],
    images: 8,
    link: "https://medicare-app.herokuapp.com/",
    externalLink: true
  }
};

const Projects = props => {
  const [, setGlobalSlider] = props.globalSlider();
  const [animationOut, setAnimationOut] = useState(false);

  const goToMenu = () => {
    setGlobalSlider(props.history.push, "/menu", {
      vertical: false,
      reverse: true
    });
    setAnimationOut(true);
  };

  let projectListClasses = [classes.ProjectList];

  if (!animationOut) {
    projectListClasses.push(classes.fadein);
  } else if (animationOut) {
    projectListClasses.push(classes.fadeout);
  }

  return (
    <div className={classes.Projects}>
      <div className={projectListClasses.join(" ")}>
        <div className={classes.Forward} onClick={goToMenu}>
          <img alt="" src={Forward} />
        </div>
        <Project info={projects.medicare} />
        <Project info={projects.motionflow} />
        <Project noexpand info={projects.motionflowDashboard} />
        <Project info={projects.intelliapp} />
        <Project info={projects.tempest} />
      </div>
    </div>
  );
};

export default Projects;
