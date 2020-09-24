import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BasePage from "./components/Layout/BasePage.jsx";
import ExercisePage from "./components/ExerciseLayout/ExercisePage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          from="/dashboard"
          render={(props) => (
            <BasePage {...props}>
              <div>There's nothing here. Navigate to an exercise page.</div>
            </BasePage>
          )}
        />
        <Route
          exact
          from="/dashboard/squat"
          render={(props) => (
            <BasePage {...props}>
              <ExercisePage exercise={"squat"}></ExercisePage>
            </BasePage>
          )}
        />
        <Route
          exact
          from="/dashboard/bench"
          render={(props) => (
            <BasePage {...props}>
              <ExercisePage exercise={"bench"}></ExercisePage>
            </BasePage>
          )}
        />
        <Route
          exact
          from="/dashboard/deadlift"
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
