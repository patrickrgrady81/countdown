import React from 'react'

import './countdown.css';

function Countdown(props) {

  let days = (props.date.getTime() - Date.now()) / (1000 * 60 * 60 * 24);
  // let hours = parseInt(((props.date.getTime() - Date.now()) / (1000 * 60 * 60 * 24) - days) * 24);
  let until;
  let color;
  if (days >=0) {
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
        <h3>{`${days} Day${addS} ${until} ${props.date.toDateString()}`}</h3>
      </div>
    </div>
  )
}

export default Countdown