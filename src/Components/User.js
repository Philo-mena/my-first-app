import React from "react";
import { Card } from "react-bootstrap";

const User = (props) => {
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

          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default User;
