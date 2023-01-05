import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Home, Browse, Signin, Signup } from "./pages";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { useAthListener } from "./hooks";


export default function App() {
  const { user } = useAthListener();
  if(localStorage.getItem("location")){

    function getlocation() {
      fetch('https://api.ipregistry.co/?key=zq3s4axqkxp9h6bb')
      .then(function (response) {
          return response.json();
      })
      .then(function (payload) {
         localStorage.setItem("location",payload.location.country.name);
        });
      }
      getlocation()
    }
    document.title = `Netflix ${localStorage.getItem('location')} - Watch TV Shows Online, Watch Movies Online `
  return (
    <>
    <Router>
      <Switch>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_IN}
          exact
        >
          <Signin />
        </IsUserRedirect>

        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_UP}
          exact
        >
          <Signup />
        </IsUserRedirect>
        <ProtectedRoute user={user} path={ROUTES.BROWSE} exact>
          <Browse />
        </ProtectedRoute>

        <IsUserRedirect
          user={user}
          path={ROUTES.HOME}
          loggedInPath={ROUTES.BROWSE}
          exact
        >
          <Home />
        </IsUserRedirect>
      </Switch>
    </Router>
    <div>
      
     
    </div>
    </>
  );
}
