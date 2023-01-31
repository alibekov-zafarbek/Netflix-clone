import React from "react";
import { render } from "react-dom";
import "normalize.css";
import App from "./App";
import { GlobalStyles } from "./global-styles";
import { firebase } from "./lib/firebase.prod";
import { FirebaseContext } from "./content/firebase";
import './i18n'

render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <React.Suspense fallback='loading'>

      <App />
      </React.Suspense>
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
);
