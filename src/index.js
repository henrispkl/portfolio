import React from "react";
import ReactDOM from "react-dom";
import "./MainStyle.css";
import Header from "./components/Header";
import FirstPanel from "./components/FirstPanel";
import SecondPanel from "./components/SecondPanel";
import Footer from "./components/Footer";

class App extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header />
        <FirstPanel />
        <SecondPanel />
        <Footer />
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
