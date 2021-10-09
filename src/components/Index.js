import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Main from "./layouts/Main";
import Login from "../pages/Login";

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
      </Switch>
      <Footer />
    </Router>
  );
}
