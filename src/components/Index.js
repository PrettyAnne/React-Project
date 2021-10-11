import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Main from "./layouts/Main";
import Login from "../pages/Login";
import MagicCrystals from "../pages/MagicCrystals";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function Index() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/MagicCrystals">
          <MagicCrystals />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
