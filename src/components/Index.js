import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Main from "../pages/Main";
import Login from "../pages/Login";
import MagicCrystals from "../pages/MagicCrystals";
import Category from "../pages/Category";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./layouts/ScrollToTop";

export default function Index() {
  return (
    <Router basename="/React-Project">
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/Login">
        <ScrollToTop />
          <Login />
        </Route>
        <Route path="/MagicCrystals">
          <ScrollToTop />
          <MagicCrystals user="user"/>
        </Route>
        <Route path="/category">
          <ScrollToTop />
          <Category />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
