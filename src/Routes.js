import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';

import Home from "./components/pages/Home";
import Book from "./components/pages/Book";
import User from "./components/pages/User";
import CreateUser from "./components/pages/CreateUser";


const Routes = (
  <Router>
    <div>
      {/*Map a URL route to a component, which will be rendered when that url is request*/}
      <Route exact path="/" component={ Home } />
      <Route exact path="/user/:email" component={ User } />
      <Route exact path="/user" component={ CreateUser } />

    </div>
  </Router>
);

export default Routes;
