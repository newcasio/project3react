import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';

import Home from "./components/pages/Home";
import UserShow from "./components/pages/UserShow";
import CreateUser from "./components/pages/CreateUser";


const Routes = (
  <Router>
    <div>
      {/*Map a URL route to a component, which will be rendered when that url is request*/}
      <Route exact path="/" component={ Home } />
      <Route exact path="/userShow" component={ UserShow } />
      <Route exact path="/user" component={ CreateUser } />

    </div>
  </Router>
);

export default Routes;
