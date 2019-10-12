import React, { useState } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import Slider from "./components/Slider/Slider";
import Main from "./pages/Main";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Projects from "./pages/Projects";

const App = props => {
  const [mainPageLoaded, setMainPageLodaded] = useState(false);
  const [pageSlider, setPageSlider] = useState({ slide: false });

  const globalSlider = () => {
    const a = pageSlider;
    const b = (pushFunction, path, sliderProps) => {
      if (!pageSlider.slide) {
        setPageSlider({ ...pageSlider, slide: true, sliderProps });
      }

      setTimeout(() => {
        pushFunction(path);
      }, 750);

      setTimeout(() => {
        setPageSlider({ ...pageSlider, slide: false });
      }, 1150);
    };

    return [a, b];
  };

  return (
    <React.Fragment>
      {pageSlider.slide && (
        <Slider timein={10} vertical fixed {...pageSlider.sliderProps} />
      )}
      <HashRouter>
        <Switch>
          <Route
            path="/menu"
            render={props => <Menu {...props} globalSlider={globalSlider} />}
          />
          <Route
            path="/about"
            render={props => <About {...props} globalSlider={globalSlider} />}
          />
          <Route
            path="/projects"
            render={props => <Projects {...props} globalSlider={globalSlider} />}
          />
          <Route
            path="/"
            render={props => (
              <Main
                {...props}
                globalSlider={globalSlider}
                mainPageLoaded={mainPageLoaded}
                setMainPageLodaded={setMainPageLodaded}
              />
            )}
          />
        </Switch>
      </HashRouter>
    </React.Fragment>
  );
};

export default App;
