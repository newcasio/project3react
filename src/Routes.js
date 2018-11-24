import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';

import Home from "./components/Home";
import Book from "./components/Book";
import User from "./components/User";
import CreateUser from "./components/CreateUser";


const Routes = (
  <Router>
    <div>
      {/*Map a URL route to a component, which will be rendered when that url is request*/}
      <Route exact path="/" component={ Home } />
      <Route exact path="/book/:id" component={ Book } />
      <Route exact path="/user/:id" component={ User } />
      <Route exact path="/user/new" component={ CreateUser } />


    </div>
  </Router>
);

export default Routes;
