import { React, useState, createRef } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import DateTimePicker from "react-datetime-picker";

const TodoItemModal = (props) => {
  // Calendar
  const [calendarValue, setCalendarValue] = useState(new Date());

  const todoNameRef = createRef();
  const todoModuleRef = createRef();
  const todoDescriptionRef = createRef();
  const addTodoItemHandler = (evt) => {
    evt.preventDefault();
    console.log("Adding a todo item: ");
    console.log(todoNameRef.current.value);
    console.log(todoModuleRef.current.value);
    console.log(calendarValue);
    console.log(todoDescriptionRef.current.value);
    const newTodoObject = {
      todo_item_id: Math.random(),
      category_item_id: props.category_id, 
      module: todoModuleRef.current.value,
      title: todoNameRef.current.value,
      description: todoDescriptionRef.current.value,
      deadline: calendarValue,
    };
    props.onAddTodoItem(newTodoObject);
  };

  return (
    <Modal show={props.show} onHide={props.onCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Add something...</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={addTodoItemHandler} id="todoForm">
          <Form.Group className="mb-3">
            <Form.Label>Name: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Assignment Name"
              form="todoForm"
              ref={todoNameRef}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Module: </Form.Label>
            <Form.Select
              label="Select a Module..."
              form="todoForm"
              ref={todoModuleRef}
            >
              <option>MA1521</option>
              <option>CS1231S</option>
              <option>CS1101S</option>
              <option>CS2040S</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label className="mr-3">Deadline?</Form.Label>
            <DateTimePicker onChange={setCalendarValue} value={calendarValue} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Short Description...</Form.Label>
            <Form.Control
              as="textarea"
              row={2}
              form="todoForm"
              ref={todoDescriptionRef}
            ></Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onCloseModal}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={props.onCloseModal}
          type="submit"
          form="todoForm"
        >
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TodoItemModal;
