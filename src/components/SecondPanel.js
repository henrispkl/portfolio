import React from "react";

function Section(props) {
  return (
    <div className="section">
      <div className="secTitle">{props.title}</div>
      <div className="secIcon">
        <i className={props.iconClasses} />
      </div>
      <div className="secText">{props.text}</div>
    </div>
  );
}

class SecondPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <div className="second-panel">
          <Section
            title="Section 1"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ipsum metus, posuere a ornare ut, aliquam quis ligula. Nulla pharetra, mauris in vestibulum pretium, magna nisi posuere dolor, quis viverra lacus magna et leo. Pellentesque tristique lobortis ex."
            iconClasses="fas fa-globe-americas"
          />
          <Section
            title="Section 2"
            text="Ut mollis, massa ultrices molestie aliquet, dolor lacus luctus augue, eget convallis massa ligula malesuada metus. Fusce sed pellentesque eros. Integer id felis ut."
            iconClasses="fas fa-tshirt"
          />
          <Section
            title="Section 3"
            text="Vivamus quis hendrerit risus, vel lacinia ex. Proin in urna tempor, blandit lorem vel, finibus nulla. Nulla facilisi. Integer ac lectus placerat, sollicitudin odio quis."
            iconClasses="fas fa-shipping-fast"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default SecondPanel;
