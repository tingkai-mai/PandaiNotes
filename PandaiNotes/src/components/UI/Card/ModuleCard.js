import { React, useState } from "react";
import { Card, Form, InputGroup, Button, Modal } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import classes from "./ModuleCard.module.scss";
import DateTimePicker from "react-datetime-picker";

const ModuleCard = (props) => {
  // MODAL
  const [showModal, setShowModal] = useState(false);

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const openModalHandler = () => {
    setShowModal(true);
  };

  // Checkbox
  const checkboxHandler = (evt) => {
    console.log(evt.target.checked);
    console.log(evt.target.value);
  };

  // Calendar
  const [calendarValue, setCalendarValue] = useState(new Date());

  // TODO HANDLER
  const addTodoHandler = (evt) => {
    console.log("Adding a todo item");
    openModalHandler();
  };

  const deleteItemHandler = (evt) => {
    console.log("Deleting this item ID: ");
    console.log(evt.target.title);
  };

  const contextMenuHandler = (evt) => {
    // evt.preventDefault();
    console.log("Context menu called");
  };

  const todoItems = props.todoItems;
  return (
    <>
      <Modal show={showModal} onHide={closeModalHandler}>
        <Modal.Header closeButton>
          <Modal.Title>Add something...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name: </Form.Label>
              <Form.Control
                type="text"
                placeholder="Assignment Name"
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Module: </Form.Label>
              <Form.Select label="Select a Module...">
                <option>MA1521</option>
                <option>CS1231S</option>
                <option>CS1101S</option>
                <option>CS2040S</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label className="mr-3">Deadline?</Form.Label>
              <DateTimePicker
                onChange={setCalendarValue}
                value={calendarValue}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Short Description...</Form.Label>
              <Form.Control as="textarea" row={2}></Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModalHandler}>
            Close
          </Button>
          <Button variant="primary" onClick={closeModalHandler}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
      <Card
        className={`${classes.cardBox} p-3 d-flex flex-column rounded-2`}
        style={{ borderColor: props.cardColor }}
      >
        <Card.Title>{props.cardTitle}</Card.Title>
        <InputGroup
          className={`d-flex flex-column`}
          onContextMenu={contextMenuHandler}
        >
          {todoItems.map((todoItem) => {
            return (
              <Form.Check
                key={todoItem.id}
                className={`${classes.inputItem}`}
                value={todoItem.id}
              >
                <Form.Check.Input
                  onClick={checkboxHandler}
                  type="checkbox"
                  value={todoItem.id}
                />
                <Form.Check.Label
                  onClick={deleteItemHandler}
                  title={todoItem.id}
                  // style={{ textDecoration: "line-through" }}
                >
                  {todoItem.description}
                </Form.Check.Label>
              </Form.Check>
            );
          })}
        </InputGroup>
        <Button
          className="align-self-end m-2 rounded-circle"
          variant="outline-primary"
          onClick={addTodoHandler}
        >
          <AiOutlinePlus />
        </Button>
      </Card>
      <br />
    </>
  );
};

export default ModuleCard;
