import React, { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import EditForm from "./EditForm";

const User = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let pupil = props.student;
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Name: {pupil.name} </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Gen: {pupil.gen}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            height: {pupil.height}
          </Card.Subtitle>

          <Button href="#" onClick={handleShow}>
            Edit
          </Button>
          <Button href="#" variant="danger">
            Delete
          </Button>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm student={pupil} updateData={props.updateData} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default User;
