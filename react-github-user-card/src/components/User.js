import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import Calendar from './Calendar';

const User = ({ userData, login }) => {
  const { name, following, followers, avatar_url } = userData;

  return (
    <div className='user-container'>
      <div className='user-info'>
        <h1>{name}</h1>
        <h3>{login}</h3>
        <img width='200' src={avatar_url} alt='user-image' />
        <h3>
          {name} has {followers} followers and is following {following} other
          github users
        </h3>
      </div>

      <h3>Followers:</h3>
    </div>
  );
};

export default User;

/*  <iframe
        width='600'
        height='600'
        src={`https://ionicabizau.github.io/github-profile-languages/api.html?${login}`}
        frameborder='0'
      ></iframe> */
