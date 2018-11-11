import React from "react";
import FloralImage from "../images/floral.png";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <div
          className="header"
          style={{ backgroundImage: "url('" + FloralImage + "')" }}
        >
          <div className="site-title">minimum</div>
          <div className="site-desc">INDUCE YOURSELF</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
