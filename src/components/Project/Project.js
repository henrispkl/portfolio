import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";

import classes from "./Project.module.css";
import DoubleArrow from "../../assets/svg/double_arrow.svg";
import Label from "../../assets/svg/label.svg";
import OpenInNew from "../../assets/svg/open_in_new.svg";
import Close from "../../assets/svg/close.svg";
import ExpandMore from "../../assets/svg/expand_more.svg";

const Project = props => {
  const [infoModal, setInfoModal] = useState(false);
  const [expandedImages, setExpandedImages] = useState(false);

  const showModal = () => {
    setInfoModal(true);

    infoModalRef.current && infoModalRef.current.focus();
  };

  const hideModal = () => {
    setInfoModal(false);

    setTimeout(() => {
      setExpandedImages(false);
    }, 300);
  };

  const expandImages = () => {
    setExpandedImages(true);
  };

  const useClickToRef = ref => {
    const handleClickOutside = event => {
      // If the click was outside the main content and the modal is currently open
      if (ref.current && event.target === ref.current && infoModal) {
        hideModal();
      }
    };

    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    });
  };

  const infoModalRef = useRef(null);
  useClickToRef(infoModalRef);

  const mainImg = require(`../../projects/${props.info.folder}/main.jpg`);
  let imagesClassname = [classes.Images];
  let images = [];
  let videos = [];

  // Images
  for (let i = 1; i <= props.info.images; i++) {
    const imagePath = require(`../../projects/${props.info.folder}/img${i}.jpg`);
    images.push(
      <div key={imagePath} className={classes.Image}>
        <a
          className={classes.ImageLink}
          href={imagePath}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={OpenInNew} alt="" />
        </a>
        <img src={imagePath} alt="" />
      </div>
    );
  }

  if (expandedImages) {
    imagesClassname.push(classes.ExpandedImages);
  }

  // Videos
  if (props.info.videos) {
    for (let i = 1; i <= props.info.videos.length; i++) {
      const videoPath = require(`../../projects/${props.info.folder}/video${i}.mp4`);
      const videoDesc = props.info.videos[i - 1];
      videos.push(
        <div key={videoPath} className={classes.Video}>
          <video width="100%" controls preload="metadata">
            <source src={videoPath} type="video/mp4" />
          </video>
          <div className={classes.VideoDesc}>{videoDesc}</div>
        </div>
      );
    }
  }

  // Expand button
  let expandButton = null;

  if (!expandedImages && !props.noexpand) {
    expandButton = (
      <div className={classes.Expand} onClick={expandImages}>
        <img src={ExpandMore} alt="" />
      </div>
    );
  }

  const infoElement = (
    <CSSTransition
      in={infoModal}
      timeout={300}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: classes.InfoModalEnter,
        enterActive: classes.InfoModalEnterActive,
        enterDone: classes.InfoModalEnterActive,
        exit: classes.InfoModalExit,
        exitActive: classes.InfoModalExitActive,
        exitDone: classes.InfoModalExitActive
      }}
    >
      {state => (
        <div className={classes.InfoModal} ref={infoModalRef}>
          <div className={classes.InfoMain}>
            <div className={classes.InfoName}>
              {props.info.name}
              <div className={classes.Close} onClick={hideModal}>
                <img src={Close} alt="" />
              </div>
            </div>
            <div className={classes.InfoContent}>
              <p>
                <b>Overview: </b> {props.info.overview}
              </p>
              <div className={classes.Tags}>
                {props.info.tags.map(tag => {
                  return (
                    <div key={tag} className={classes.Tag}>
                      <img src={Label} alt="" />
                      {tag}
                    </div>
                  );
                })}
              </div>
              {props.info.link && (
                <a
                  className={classes.Visit}
                  href={process.env.PUBLIC_URL + "/" + props.info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                  <img src={DoubleArrow} alt="" />
                </a>
              )}
              <div className={classes.Videos}>{videos}</div>
              <div className={imagesClassname.join(" ")}>
                {images}
                {expandButton}
              </div>
            </div>
          </div>
        </div>
      )}
    </CSSTransition>
  );

  return (
    <div className={classes.Project}>
      <div onClick={showModal} className={classes.ProjectSquare}>
        <div className={classes.Gradient}></div>
        <div className={classes.ProjectName}>{props.info.name}</div>
        <img src={mainImg} alt="" />
      </div>
      {infoElement}
    </div>
  );
};

export default Project;
