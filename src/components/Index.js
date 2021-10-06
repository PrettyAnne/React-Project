import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Main from "./layouts/Main";
import Login from "../pages/Login";

import { Route, Switch } from "react-router";

export default function Index() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/Main">
          <Main />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
