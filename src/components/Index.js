import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";
import Main from "../pages/main/Main";
import Login from "../pages/login/Login";
import Product from "../pages/product/Product";
import Category from "../pages/category/Category";

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
        <Route path="/product/:prdId">
          <ScrollToTop />
          <Product user="user"/>
        </Route>
        <Route path="/category/:categoryId">
          <ScrollToTop />
          <Category />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
