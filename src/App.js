import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import { v4 as uuidv4 } from 'uuid';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import {useState} from 'react';

import "./App.css";

import Countdown from "./Countdown"


function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState();
  const [dates, setDates] = useState([]);

  const addDate = () => {
    setDates([...dates, selectedDay])
    dates.sort((a, b) => {
      if (a < b) return -1;
      else if (a > b) return 1;
      else return 0;
    })
  }

  const handleAdd = (e) => {
    e.preventDefault();

    addDate();

    setIsModalOpen(false);
  }

  const handleCancel = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
  }

  const handleShow = () => setIsModalOpen(true);

  return (
    <div>
      <Button variant="info" onClick={handleShow}>Add Countdown Timer</Button>

      <Modal show={isModalOpen} backdrop="static" centered contentClassName="modal-dates">
      <Form className="modal-form">
        <div className="dates">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="center bold underline">Select Countdown Date</Form.Label>
            <DayPicker 
              mode="single"
              selected={selectedDay}
              onSelect={setSelectedDay}
            />
          </Form.Group>
        </div>
        <Button variant="primary" type="submit" onClick={(e)=>handleAdd(e)}>
          Add
        </Button>
        <Button variant="danger" onClick={(e)=>handleCancel(e)}>Cancel</Button>
      </Form>
      </Modal>
      {
        dates.map(date => {
          // return <h3 key={uuidv4()}>{String(date)}</h3>
          return <Countdown key={uuidv4()} date={date}/>
          // console.log(String(date));
        })
      }
    </div>

    
  );
}

export default App;
