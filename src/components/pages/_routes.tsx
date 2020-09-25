import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage } from "./HomePage";
import { NotFoundPage } from "./NotFoundPage";

export function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </>
  );
}
