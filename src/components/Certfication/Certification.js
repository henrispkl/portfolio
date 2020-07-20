import React from 'react';

import classes from './Certification.module.css';

const Certification = (props) => {
  const certImage = require(`../../assets/img/cert${props.number}.jpg`);
  const certIcon = require(`../../assets/img/cert${props.number}-icon.jpg`);
  return (
    <a
      className={classes.CertLink}
      href={certImage}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={certIcon} alt="" />
    </a>
  );
};

export default Certification;
