import Button from 'react-bootstrap/Button';
import './nav.css';

import React from 'react'

export default function Nav(props) {
  return (
    <div className="nav">
        <div>COUNTDOWN</div>
        <Button variant="info" onClick={props.handleShow} className="add-btn">Add Countdown Timer</Button>
    </div>
  )
}
