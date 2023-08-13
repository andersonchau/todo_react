import 'bootstrap/dist/css/bootstrap.min.css'; 
import Modal from 'react-bootstrap/Modal'
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useEffect, useState,useContext, useReducer } from "react";
import { TasksContext,TasksDispatchContext } from './TaskContext.js';


export default function TodoForm() {
    
    const todoData = useContext(TasksContext);
    const dispatch = useContext(TasksDispatchContext);
    
    const [formData, setFormData] = useState('');
    
    function handleSubmit( ){
        //e.preventDefault();
        let text = formData
        dispatch({
            type: 'INPUT_SUBMIT',
            inputData : text
          });    
    }

    function handleClose(){
        dispatch({
            type: 'CLOSE_FORM'
          });  
    }

    return (
        <>
       <Modal show={todoData.ui.formShow} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Modal Form Title</Modal.Title>
            </Modal.Header>
        <Modal.Body>
          <Form.Group >
              <Form.Label>Name: </Form.Label>
              <Form.Control type="text"  placeholder="Data Input" onChange = {(e) => setFormData(e.target.value)} />           
          </Form.Group>
      </Modal.Body>
      <Modal.Footer>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
              Submit
          </Button>
      </Modal.Footer>
    </Modal>
    
    </>
        );

}


