import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <div className="footer">
          <div className="f-sec">
            <div className="f-title">Links 1</div>
            <div className="f-link-cont">
              <a className="f-link" href="/">
                Ipsum
              </a>
            </div>
            <div className="f-link-cont">
              <a className="f-link" href="/">
                Posuere congue
              </a>
            </div>
            <div className="f-link-cont">
              <a className="f-link" href="/">
                Phasellus
              </a>
            </div>
            <div className="f-link-cont">
              <a className="f-link" href="/">
                Molestie sagittis nulla
              </a>
            </div>
          </div>
          <div className="f-sec">
            <div className="f-title">Links 2</div>
            <div className="f-link-cont">
              <a className="f-link" href="/">
                Volutpat placerat
              </a>
            </div>
            <div className="f-link-cont">
              <a className="f-link" href="/">
                Pretium tempus
              </a>
            </div>
            <div className="f-link-cont">
              <a className="f-link" href="/">
                Vestibulum
              </a>
            </div>
            <div className="f-link-cont">
              <a className="f-link" href="/">
                Donec
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
