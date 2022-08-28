import React from 'react';

import axios from 'axios';

import Button from 'react-bootstrap/Button';

import './countdown.css';

function Countdown(props) {
  
  let d = new Date(props.date.date);

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
  let addS = days !== 1 ? "s" : "";

  const handleDelete = async () => {
    console.log(props.date.id);
    const res = await axios.delete(`http://localhost:8080/api/v1/date/${props.date.id}`);
    
    console.log(res);
    props.fetchDates();
  }

  const showDate = new Date(props.date.date);
  
  return (
    <div className="container">
      <div className={`countdown ${color}`}>
        <h3>{`${days} Day${addS} ${until} ${showDate}`}</h3>
        <Button className={`delete-button ${color}`} onClick={handleDelete}>X</Button>
      </div>
    </div>
  )
}

export default Countdown