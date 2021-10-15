import React, {useState, useEffect} from "react";
import Header from "./components/Header";
import PizzaForm from "./components/PizzaForm";
import { Link, Route, Switch } from 'react-router-dom';
import * as yup from 'yup';
import schema from './validation/formSchema';
import axios from "axios";

const initialFormValues = {
  name: "",
  dropdown: "Select Size",
  mushrooms: false,
  peppers: false,
  olives: false,
  pepperoni: false,
  instructions: ''
}

const initialFormErrors = {
  name: "",
  dropdown: "Select Size",
  mushrooms: false,
  peppers: false,
  olives: false,
  pepperoni: false,
  instructions: ''
}

const initialPizza = {
  name: "The One",
  dropdown: "Large",
  mushrooms: true,
  peppers: false,
  olives: false,
  pepperoni: true,
  instructions: 'Extra Toasty'
}


const App = () => {
  const [pizzas, setPizzas] = useState(initialPizza);
  const [formValues, setFormValues ] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);

  const stateSpace = {
    pizzas: pizzas,
    setPizzas: setPizzas,
    formValues: formValues,
    setFormValues: setFormValues,
    formErrors: formErrors,
    setFormErrors: setFormErrors,
    disabled: disabled,
    setDisabled: setDisabled
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: ''}))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  const change = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value})
  }

  const postPizza = (newPizza) => {
    axios.post('https://reqres.in/api/orders', newPizza)
    .then(res => {
      setPizzas([res.data, ...pizzas]);
    }).catch(err => {
      console.error(err);
    }).finally(() => {
      setFormValues(initialFormValues);
    })
  
  }

  const submit = () => {
    const newPizza = {
      name: formValues.name.trim(),
      dropdown: formValues.dropdown,
      mushrooms: formValues.mushrooms,
      peppers: formValues.peppers,
      olives: formValues.olives,
      pepperoni: formValues.pepperoni,
      instructions: formValues.instructions
    }
    postPizza(newPizza);
  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues]);


  return (
    <>
      <Header/>
      <Switch>
        <Route path="/pizza">
          <PizzaForm stateSpace={stateSpace} change={change} submit={submit}/>
        </Route>
        <Route path="/">
          
        </Route>
      </Switch>

    </>
  );
};
export default App;
