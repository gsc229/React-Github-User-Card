import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    githubData: []
  };

  componentDidMount = () => {
    fetch(`https://api.github.com/users/gsc229/`)
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.log("that dog dont' fetch "));
  };

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
