import React from 'react';
import './App.css';
import axios from 'axios';
import { Route } from 'react-router-dom';
import User from './components/User';
import Followers from './components/Followers';
import Person from './components/Person';

class App extends React.Component {
  state = {
    page: 1,
    handle: '',
    user: [],
    followers: []
  };

  componentDidMount = () => {
    axios
      .get(`https://api.github.com/users/gsc229`)
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log("that dog don't fetch user ", err));
    axios
      .get(`https://api.github.com/users/gsc229/followers`)

      .then(res => this.setState({ followers: res.data }))

      .catch(err => console.log("that dog don't fetch users,", err));
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.page !== this.state.page) {
      axios
        .get(
          `https://api.github.com/users/${this.state.handle}/followers?page=${this.state.page}&per_page=100`
        )
        .then(res => this.setState({ followers: res.data }))
        .catch(err => console.log("that dog don't fetch users,", err));
    }
  };

  handleChange = event => {
    this.setState({ handle: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.handle}`)
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log("that dog don't fetch users,", err));
    axios
      .get(
        `https://api.github.com/users/${this.state.handle}/followers?per_page=100`
      )
      .then(res => this.setState({ followers: res.data }, console.log(res)))
      .catch(err => console.log("that dog don't fetch users,", err));
  };

  handleProfileClick = event => {
    event.preventDefault();
    console.log(event.target);
    axios
      .get(`https://api.github.com/users/${event.target.id}`)
      .then(res => this.setState({ user: res.data }))

      .catch(err => console.log("that dog don't fetch users,", err));
    axios
      .get(
        `https://api.github.com/users/${event.target.id}/followers?per_page=100`
      )
      .then(res => this.setState({ followers: res.data }, console.log(res)))
      .catch(err => console.log("that dog don't fetch users,", err));
    this.setState({ page: 1 });
  };

  clickNext = event => {
    event.preventDefault();
    const numFollowers = this.state.user.followers;
    const pgNum = this.state.page;
    if (numFollowers / 100 > pgNum) {
      this.setState({ page: this.state.page + 1 });
    }
  };

  clickPrev = event => {
    event.preventDefault();
    if (this.state.page > 1) {
      this.setState({ page: this.state.page - 1 });
    }
  };

  render() {
    /* console.log('App.js: state: user: ', this.state.user);
    console.log('App.js: state: following: ', this.state.following);
    */
    console.log('App.js: state: ', this.state);
    return (
      <div className='App'>
        <Route exact path='/'>
          <form onSubmit={this.handleSubmit} action=''>
            <input
              placeholder='Enter a github handle here'
              type='text'
              onChange={this.handleChange}
              value={this.state.handle}
            />
            <button>Git User Info</button>
          </form>

          <User userData={this.state.user} />
          <Followers
            page={this.state.page}
            clickNext={this.clickNext}
            clickPrev={this.clickPrev}
            followersData={this.state.followers}
            handleProfileClick={this.handleProfileClick}
          />
        </Route>

        <Route
          path='/followers/:id'
          render={props => (
            <Person {...props} followersData={this.state.followers} />
          )}
        />
      </div>
    );
  }
}

export default App;
