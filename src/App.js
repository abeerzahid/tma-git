import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  SingleProduct,
  AllProducts,
} from "./components";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path={"/"} component={Home} exact />
            <Route path={"/singleproduct/:id"} component={SingleProduct} />
            <Route path={"/allproducts"} component={AllProducts} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
