import React from "react";
import { Container, Card, Button } from "react-bootstrap";

// Component that shows note in ModuleFileViewer
const NotesCard = (props) => {
  return (
    <Container>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{props.noteTitle}</Card.Title>
          <Card.Text>
            {props.noteDesc}
          </Card.Text>
          <Button variant="secondary">Open</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default NotesCard;
