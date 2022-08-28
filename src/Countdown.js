import React from 'react';

import Button from 'react-bootstrap/Button';

import './countdown.css';

function Countdown(props) {

  let d = new Date(props.date);

  // console.log(`Props in Countdown ${d}`);

  let days = (d - Date.now()) / (1000 * 60 * 60 * 24);
  // console.log(`DAYS IN COUNTDOWN: ${days}`);
  let until;
  let color;
  if (days > -1) {
    until = "until";
    color = "greenish";
  } else {
    until = "since";
    color = "reddish";
  }
  days = days > 0 ? Math.ceil(Math.abs(days)) : Math.floor(Math.abs(days));
  let addS = days !== 1 ? "s" : ""
  
  return (
    <div className="container">
      <div className={`countdown ${color}`}>
        <h3>{`${days} Day${addS} ${until} ${d.toDateString()}`}</h3>
        <Button className={`delete-button ${color}`}>X</Button>
      </div>
    </div>
  )
}

export default Countdown