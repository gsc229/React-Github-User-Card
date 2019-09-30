import React from 'react';
import { Link } from 'react-router-dom';

const Followers = ({ followersData }) => {
  return (
    <div className='followers-list list'>
      {followersData.map(follower => (
        <div className='follower person' key={follower.id}>
          <Link to={`/followers/${follower.id}`}>
            <img width='100' src={follower.avatar_url} alt='following photo' />
            <p>{follower.login}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Followers;
