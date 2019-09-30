import React from 'react';
import './App.css';
import axios from 'axios';
import { Route } from 'react-router-dom';
import User from './components/User';
import Followers from './components/Followers';
import Person from './components/Person';

class App extends React.Component {
  state = {
    user: [],
    followers: []
  };

  componentDidMount = () => {
    axios
      .get(`https://api.github.com/users/gsc229`)
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log("that dog don't fetch user "));
    axios
      .get(`https://api.github.com/users/gsc229/followers`)
      .then(res => this.setState({ followers: res.data }))
      .catch(err => console.log("that dog don't fetch users,", err));
  };

  render() {
    /* console.log('App.js: state: user: ', this.state.user);
    console.log('App.js: state: following: ', this.state.following);
    */
    console.log('App.js: state: ', this.state);
    return (
      <div className='App'>
        <Route exact path='/'>
          <User userData={this.state.user} />
          <Followers followersData={this.state.followers} />
        </Route>

        <Route
          path='/following/:id'
          render={props => (
            <Person {...props} followersData={this.state.followers} />
          )}
        />
      </div>
    );
  }
}

export default App;
