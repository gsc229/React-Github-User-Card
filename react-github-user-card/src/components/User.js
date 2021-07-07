import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import Calendar from './Calendar';

const User = ({ userData }) => {
  const { name, following, followers, avatar_url, login } = userData;

  return (
    <div className='user-container'>
      <div className='user-info-container'>
        <div className='user-info'>
          <h1>{name}</h1>
          <h3>{login}</h3>
          <img id='profile-pic' width='200' src={avatar_url} alt='user-image' />
          <h3>
            {name} has {followers} followers and is following {following} other
            github users
          </h3>
          <img
            id='git-hub-calendar'
            src={`http://ghchart.rshah.org/${login}`}
          ></img>
        </div>
        {/* user info */}
        <div className='code-languages'>
          <iframe
            width='600'
            height='600'
            src={`https://ionicabizau.github.io/github-profile-languages/api.html?${login}`}
            frameborder='0'
          ></iframe>
        </div>
        {/* code langues */}
      </div>{' '}
      {/* user-info-container */}
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
