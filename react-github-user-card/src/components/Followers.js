import React from 'react';
import { Link } from 'react-router-dom';

const Followers = ({
  followersData,
  handleProfileClick,
  page,
  clickNext,
  clickPrev
}) => {
  return (
    <div className='followers-list list'>
      <h3>Followers:</h3>
      <div className='paginate'>
        <button onClick={clickPrev}>&lt;&lt;&lt;</button>
        <h4>page: {page}</h4>
        <button onClick={clickNext}>&gt;&gt;&gt;</button>
      </div>
      <div className='followers-container container'>
        {followersData.map(follower => (
          <div className='follower person' key={follower.id}>
            <img width='100' src={follower.avatar_url} alt='following photo' />
            <p>{follower.login}</p>
            <button id={follower.login} onClick={handleProfileClick}>
              See {follower.login}'s followers
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Followers;
