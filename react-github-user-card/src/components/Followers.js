import React from 'react';
import { Link } from 'react-router-dom';

const Followers = ({
  followersData,
  handleProfileClick,
  page,
  clickNext,
  clickPrev,
  user
}) => {
  const follwersTotal = user.followers;
  const pages = num => {
    if (num > 100) {
      return Math.ceil(num / 100);
    } else return 1;
  };
  return (
    <div className='followers-list list'>
      <h3>Followers:</h3>
      <div className='paginate'>
        <button onClick={clickPrev}>&lt;&lt;&lt;</button>
        <h4>
          page: {page} / {pages(follwersTotal)}
        </h4>
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
