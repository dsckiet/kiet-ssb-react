import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from "./components/navbar";

const App = () => {
  return (
    <div className="App">
      <Navbar/>
    </div>
  );
}

export default App;
