import React from 'react'

import './countdown.css';

function Countdown(props) {

  let days = parseInt((props.date.getTime() - Date.now()) / (1000 * 60 * 60 * 24)) + 1;
  // let hours = parseInt(((props.date.getTime() - Date.now()) / (1000 * 60 * 60 * 24) - days) * 24);
  let addS = days > 1 ? "s" : ""
  
  return (
    <div className="container">
      <div className="countdown">
        <h3>{`${days} Day${addS} until ${props.date.toDateString()}`}</h3>
      </div>
    </div>
  )
}

export default Countdown