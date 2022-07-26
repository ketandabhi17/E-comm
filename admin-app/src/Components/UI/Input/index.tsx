import React from "react";
import{Form} from 'react-bootstrap'

const Input = (props:any) => {
  return (
    <Form.Group className="mb-3" controlId={props.controlId}>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control
       type={props.type} 
       placeholder={props.placeholder} 
       value={props.value}
       onChange={props.onChange}
       />
    </Form.Group>
  );
};

export default Input;
