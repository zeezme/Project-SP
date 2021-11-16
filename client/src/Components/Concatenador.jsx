import React from 'react';
import Inicio from './Inicio';
import Contato from './Contato';
import Header from './Header';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function Concatenador() {

  return (
    <Router>
        <Header/>
        <Switch>
        <Route path="/" exact component={() => <Inicio />} />
        <Route path="/Inicio" exact component={() => <Inicio />} />
        <Route path="/Contato" exact component={() => <Contato />} />
        </Switch>

     
    </Router>
  )
}

export default Concatenador;


