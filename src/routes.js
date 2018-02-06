import React from 'react';
import { Switch, Route } from 'react-router-dom';
// ^^ enables the use of router in the application ^^ //
import Home from './components/Home/Home';
import About from './components/About/About';
import ClassList from './components/ClassList/ClassList';
import Student from './components/Student/Student';
// ^^ components that we want to route to. ^^ // 

// VV exporting the router VV //

export default (
  <Switch>
    <Route component={ Home } exact path="/" />
    {/* exact path to load to "home/landing-page" */}
    <Route component={ About } path="/about" />
    <Route component={ ClassList } path='/classlist/:class' />
    <Route component={ Student } path='/student/:id' />
  </Switch>
)
