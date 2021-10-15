import React from "react";
import Header from "./components/Header";
import PizzaForm from "./components/PizzaForm";
import { Link, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header/>
      <Switch>
        <Route path="/pizza">
          <PizzaForm/>
        </Route>
        <Route path="/">
          
        </Route>
      </Switch>

    </>
  );
};
export default App;
