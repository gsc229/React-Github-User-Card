import React from 'react';

const User = ({ userData }) => {
  const { name, following, followers, avatar_url } = userData;
  return (
    <div>
      <h1>{name}</h1>
      <img width='100' src={avatar_url} alt='user-image' />
      <h3>
        {name} has {followers} followers and is following {following} other
        github users
      </h3>
      <h3>Followers:</h3>
    </div>
  );
};

export default User;
