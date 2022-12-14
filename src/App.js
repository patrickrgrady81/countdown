import {useState, useEffect} from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import Countdown from './Countdown';
import Nav from './Nav';

import "./App.css";

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState();
  const [dates, setDates] = useState([]);

  const HOST = "http://localhost:8080/api/v1/date";
  // const HOST = "https://countdown-pg.herokuapp.com/api/v1/date";

  const fetchDates = () => {
    axios.get(HOST).then(res => {
      setDates(res.data);
    });

  }

  useEffect(() => {
    fetchDates();
  }, []);

  const handleAdd = (e) => {
    console.log(selectedDay);
    e.preventDefault();
    axios.post(HOST, {"date": selectedDay}).then(res => {
      fetchDates();
    });
    setDates([...dates, selectedDay])
    setIsModalOpen(false);
  }

  const handleCancel = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
  }

  const handleShow = () => setIsModalOpen(true);

  return (
    <div>
      <Nav handleShow={handleShow}/>

      <Modal show={isModalOpen} backdrop="static" centered contentClassName="modal-dates">
      <Form className="modal-form">
        <div className="dates">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="center bold underline rem2">Select Date</Form.Label>
            <DayPicker 
              mode="single"
              selected={selectedDay}
              onSelect={setSelectedDay}
            />
          </Form.Group>
        </div>
        <div className="date-btns">
          <Button variant="primary" onClick={(e)=>handleAdd(e)}>Add</Button>
          <Button variant="danger" onClick={(e)=>handleCancel(e)}>Cancel</Button>
        </div>
      </Form>
      </Modal>
      {
        dates.map(date => {
          // console.log(`PASSING DATE: ${date}`);
          return <Countdown key={uuidv4()} date={date} host={HOST} fetchDates={fetchDates}/>
        })
      }
    </div>

    
  );
}

export default App;
