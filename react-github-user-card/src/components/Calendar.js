import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const Calendar = props => {
  const username = props.login;
  console.log(typeof username);
  return (
    <div>
      <GitHubCalendar username={username} />
    </div>
  );
};

export default Calendar;
