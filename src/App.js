import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import SingleRecipe from "./pages/SingleRecipe";
import Error from "./pages/Error";
// import components
import Navbar from "./components/Navbar";
// supercazzola tapioca

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/recipe/:id">
          <SingleRecipe />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
