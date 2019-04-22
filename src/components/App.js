import React, { Component } from 'react';
import '../styles/base.css'
import { Provider } from 'react-redux'
import store from '../store'
import { BrowserRouter as Router } from 'react-router-dom'

import Header from './Header'
import Navigation from './Nav'
import Profile from './Profile'
import SearchRepos from './Search'
import Repositories from './Repos'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="wholePage">
            <Header></Header>
            <div className="container1">
              <Profile></Profile>
              <div className="container2">
                <Navigation></Navigation>
                <SearchRepos></SearchRepos>
                <Repositories></Repositories>
              </div>
            </div>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
