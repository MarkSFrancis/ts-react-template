import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter } from "react-router-dom";
import { Routes as Page } from "./pages/_routes";

export default function App() {
  return (
    <>
      <Helmet>
        <title>Starter for one</title>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <BrowserRouter>
        <Page />
      </BrowserRouter>
    </>
  );
}
