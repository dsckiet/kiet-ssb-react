import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Header from "./components/header";
import Contact from "./components/contact";
import Gallery from "./components/gallery";
import About from "./components/about";
import ArmedForces from "./components/armed-forces";

const App = () => {
  return (
    <Router className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Header} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/about" component={About} />
        <Route exact path="/armed-forces" component={ArmedForces} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
