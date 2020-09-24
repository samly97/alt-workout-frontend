import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BasePage from "./components/Layout/BasePage.jsx";
import ExercisePage from "./components/ExerciseLayout/ExercisePage.jsx";

function App() {
  return (
    <BrowserRouter basename="/dashboard">
      <Switch>
        <Route
          exact
          from="/"
          render={(props) => (
            <BasePage {...props}>
              <div>There's nothing here. Navigate to an exercise page.</div>
            </BasePage>
          )}
        />
        <Route
          exact
          from="/squat"
          render={(props) => (
            <BasePage {...props}>
              <ExercisePage exercise={"squat"}></ExercisePage>
            </BasePage>
          )}
        />
        <Route
          exact
          from="/bench"
          render={(props) => (
            <BasePage {...props}>
              <ExercisePage exercise={"bench"}></ExercisePage>
            </BasePage>
          )}
        />
        <Route
          exact
          from="/deadlift"
          render={(props) => (
            <BasePage {...props}>
              <ExercisePage exercise={"deadlift"}></ExercisePage>
            </BasePage>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
