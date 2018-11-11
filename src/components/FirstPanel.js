import React from "react";
import cityStyle from "../images/city-style.jpeg";
import musicModel from "../images/music-model.jpeg";
import butterFlyEffect from "../images/butterfly-effect.jpeg";
import lake from "../images/lake.jpeg";

function BoxElem(props) {
  return (
    <div className={props.elemClassName}>
      <span>
        {props.elemText} <i className={props.iClass} />
        <div className="box-text-border" />
      </span>
    </div>
  );
}

function CollectionPanel(props) {
  return (
    <div
      className="collection-panel"
      style={{
        backgroundImage: "url(" + props.imageSrc + ")",
        backgroundSize: props.bgSize,
        backgroundPositionX: props.bgX,
        backgroundPositionY: props.bgY
      }}
    >
      <div
        className="panel-info"
        style={{
          float: props.eFloat,
          margin: props.eMargin
        }}
      >
        <div className="panel-text">{props.text}</div>
        <div
          className="panel-desc"
          style={{ borderBottomColor: props.borderColor }}
        >
          {props.desc}
        </div>
      </div>
    </div>
  );
}

class FirstPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <div className="first-panel">
          <BoxElem
            elemClassName="box-collections box"
            elemText="Check Past Collections"
            iClass="fas fa-angle-double-right"
          />
          <BoxElem
            elemClassName="box-stores box"
            elemText="Authenticated Stores"
            iClass="fas fa-shopping-cart"
          />
        </div>
        <CollectionPanel
          text="NIGHT IN THE CITY"
          desc="Always fashion on the run"
          imageSrc={cityStyle}
          bgSize="120%"
          bgX="100%"
          bgY="35%"
          borderColor="rgb(123, 103, 212)"
          eFloat="right"
          eMargin="150px 100px 0 0"
        />
        <CollectionPanel
          text="BEAT ADDICTION"
          desc="Fits you and your music"
          imageSrc={musicModel}
          bgSize="120%"
          bgX="0%"
          bgY="40%"
          borderColor="rgb(254, 64, 106)"
          eFloat="left"
          eMargin="150px 0 0 100px"
        />
        <CollectionPanel
          text="PEACE OF MIND"
          desc="Because you're always in the control"
          imageSrc={butterFlyEffect}
          bgSize="120%"
          bgX="50%"
          bgY="60%"
          borderColor="rgb(51, 108, 161)"
          eFloat="right"
          eMargin="150px 100px 0 0"
        />
        <CollectionPanel
          text="NATURE'S BREEZE"
          desc="Be connected with the planet"
          imageSrc={lake}
          bgSize="110%"
          bgX="0%"
          bgY="60%"
          borderColor="rgb(52, 108, 88)"
          eFloat="left"
          eMargin="150px 0 0 100px"
        />
      </React.Fragment>
    );
  }
}

export default FirstPanel;
