import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const UserForm = (props) => {
  console.log(props);
  const [name, setName] = useState("");
  const [gen, setGen] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let newStudent = {
      name: name,
      gen: gen,
      id: uuid(),
    };
    console.log(newStudent);
    props.addStudent(newStudent);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            value={name}
            placeholder="Enter name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Gen</Form.Label>
          <Form.Control
            type="number"
            value={gen}
            placeholder="Gen"
            onChange={(e) => {
              setGen(e.target.value);
            }}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default UserForm;
