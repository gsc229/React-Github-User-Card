import React from 'react';

const Person = props => {
  console.log('Person.js: props: ', props);
  const person = props.followersData.find(
    hisorhers => hisorhers.id === Number(props.match.params)
  );
  console.log('Person.js: person: ', person);
  return (
    <div>
      <h1>I'm a Person</h1>
      {/* <img src={person.avatar_url} alt='' /> */}
    </div>
  );
};

export default Person;
