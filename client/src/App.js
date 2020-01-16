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
import Register from "./components/register";
import Trainers from "./components/trainers";
import WhyTraining from "./components/whyTraining";
import { Day } from "./components/day";
import { WhyKIETSSB } from "./components/whyKIETSSB";
import { Navy } from "./components/navy";
import { Army } from "./components/army";
import { Airforce } from "./components/airforce";

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
        <Route exact path="/register" component={Register} />
        <Route exact path="/trainers" component={Trainers} />
        <Route exact path="/whyTraining" component={WhyTraining} />
        <Route exact path="/day" component={Day} />
        <Route exact path="/whyKIETSSB" component={WhyKIETSSB} />
        <Route exact path="/navy" component={Navy} />
        <Route exact path="/army" component={Army} />
        <Route exact path="/airforce" component={Airforce} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
