import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Todo from './components/Todo';
import Header from './components/Header';
import Form from './components/form/index.js';
import Button from './components/button/index.js';
import './App.css';
import Search from './components/search/index.js'

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Header/>
                <Search/>
                <Button label='ok!'/>
                  <Route exact path='/' component={Dashboard}/>
                  <Route path='/todo' component={Todo}/>
                  <Route path='/form' component={Form}/>
                  <Route path='/header' component={null}/>
            </div>
        </Router>
    );
  }
}

export default App;
