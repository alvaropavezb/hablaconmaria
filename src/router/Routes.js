import React from "react";
import HomeLight from "../views/all-home-version/HomeLight";
import NotFound from "../views/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";
import Admin from "../views/admin/Admin";

const Routes = () => {
  return (
    <>
      <Router>
        <ScrollTopBehaviour />
        <Switch>
          {/* <Route exact path="/" component={Preview} /> */}
          <Route path='/admin' component={Admin} />
          <Route path='/:name?' component={HomeLight} />
          {/* <Route path="/home-dark" component={HomeDark} /> */}
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
