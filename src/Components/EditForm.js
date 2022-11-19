import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";

const EditForm = (props) => {
  console.log(props);
  const [name, setName] = useState(props.student.name);
  const [gen, setGen] = useState(props.student.gen);

  const handleSubmit = (e) => {
    e.preventDefault();
    let updatedData = {
      name: name,
      gen: gen,
      id: props.student.id,
    };
    props.updateData(props.student.id, updatedData);
    console.log(updatedData);
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

export default EditForm;
