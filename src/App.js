import React, { useEffect } from "react";
import "./App.css";
import { Awwwards } from "./components/awwwards";
import { MobileAward } from "./components/mobileAward";
import { Cursor } from "./components/cursor";
import { Cover } from "./components/cover";
import { GlobalStyles } from "./styles/globalStyles";
import { Switch, Route, useLocation } from "react-router-dom";
import { Works } from "./pages/works";
import { About } from "./pages/about";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/home";
import { Project } from "./pages/project";
import { AnimatePresence } from "framer-motion";
import { Team } from "./pages/team";
import { Mint } from "./pages/mint";
import { Provider } from "react-redux";
import store from './redux/store';

function App() {
  const location = useLocation();
  const root = document.documentElement;
  const width = window.innerWidth;

  window.addEventListener("resize", () => {
    const newWidth = window.innerWidth;
    if (newWidth < 500) {
      if (newWidth !== width) {
        window.location.reload();
      }
    } else {
      window.location.reload();
    }
  });

  useEffect(() => {
    root.style.setProperty("--VW", `${window.innerWidth * 0.01}px`);
    root.style.setProperty("--VH", `${window.innerHeight * 0.01}px`);
  }, [root.style]);

  return (
    <Provider store={store}>
      <div className="App">
        {width > 500 ? <Awwwards /> : <MobileAward />}
        <GlobalStyles />
        <Cover />
        <Cursor />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/works" exact>
              <Works />
            </Route>
            <Route path="/works/:projectID" exact>
              <Project />
            </Route>
            <Route path="/About" exact>
              <About />
            </Route>
            <Route path="/Team" exact>
              <Team />
            </Route>
            <Route path="/Mint" exact>
              <Mint />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </AnimatePresence>
      </div>
    </Provider>
  );
}

export default App;
