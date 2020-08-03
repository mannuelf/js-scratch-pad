import { Route, Redirect, Switch } from "react-router-dom";
import React from "react";
import MovieForm from "./components/movieForm";
import Customers from "./components/customers";
import Header from "./components/common/header";
import Movies from "./components/movies";
import NotFound from "./components/notfound";
import Rentals from "./components/rentals";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";

function App() {
  return (
    <main className="container">
      <Header />
      <Switch>
        <Route path="/register" component={RegisterForm}></Route>
        <Route path="/login" component={LoginForm}></Route>
        <Route path="/movies/:id" component={MovieForm}></Route>
        <Route path="/movies" component={Movies}></Route>
        <Route path="/customers" component={Customers}></Route>
        <Route path="/rentals" component={Rentals}></Route>
        <Route path="/not-found" component={NotFound}></Route>
        <Redirect from="/" exact to="/movies"></Redirect>
        <Redirect to="/not-found"></Redirect>
      </Switch>
    </main>
  );
}

export default App;
