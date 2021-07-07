import React from 'react';
import { Link } from 'react-router-dom';
const Person = props => {
  /* console.log('Person.js: props: ', props); */
  const person = props.followersData.find(
    hisorhers => hisorhers.id === Number(props.match.params.id)
  );
  const { login, followers, following, avatar_url, html_url } = person;
  /* console.log('Person.js: person: ', person); */
  return (
    <div>
      <h1>{login}</h1>
      <img width='200' src={avatar_url} alt='' />
      <h3>Chekcout {login}'s github page: </h3>
      <a href={html_url}>{html_url}</a>
    </div>
  );
};

export default Person;
