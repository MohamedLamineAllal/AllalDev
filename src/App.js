import React, { Component } from 'react';
import { Switch } from "react-router-dom";
import { connect } from 'react-redux'
import createLayoutRoute from "./Components/shared/LayoutRoute/hoc";

import MainLayout from './Components/Main/Layout';

import 'react-typist/dist/Typist.css';
import './App.scss';

import Home from "./Components/Main/Home";

import getMainGithubLinks from './actions/Main/GithubLinks/fetch'

const MainLayoutRoute = createLayoutRoute(MainLayout);

// import { bindActionCreaors } from 'redux'


class App extends Component {

  componentWillMount() {
    setTimeout(() => {
      this.props.dispatch(getMainGithubLinks())
    }, 3000);
  }

  render() {
    return (
      <Switch>
        <MainLayoutRoute exact path="/" component={Home} />
      </Switch>
    );
  }
}

export default connect()(App);
