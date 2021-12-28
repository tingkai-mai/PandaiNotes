import { React, useState } from "react";
import { Form, Collapse } from "react-bootstrap";
import { MdDeleteOutline } from "react-icons/md";
import classes from "./TodoItem.module.scss";

const TodoItem = (props) => {
  const [open, setOpen] = useState(false);

  // Checkbox
  const checkboxHandler = (evt) => {
    console.log(evt.target.checked);
    console.log(evt.target.value);
  };

  // Deleting Item Handler
  const deleteItemHandler = (evt) => {
    console.log("Deleting Item in TodoItem");
    props.onDeleteItem(evt);
  };
  return (
    <>
      <Form.Check
        key={props.todoItem.id}
        className={`${classes.inputItem}`}
        value={props.todoItem.id}
      >
        <Form.Check.Input
          onClick={checkboxHandler}
          type="checkbox"
          value={props.todoItem.id}
        />
        <Form.Check.Label
          title={props.todoItem.id}
          onClick={() => setOpen(!open)}
          className="fw-light"
          // style={{ textDecoration: "line-through" }}
        >
          {props.todoItem.description}
        </Form.Check.Label>
        <MdDeleteOutline
          onClick={deleteItemHandler}
          value={props.todoItem.id}
        />
      </Form.Check>
      <Collapse in={open}>
        <div>
          <p>Title: {props.todoItem.title}</p>
          <p>Deadline: {props.todoItem.deadline.toString()}</p>
          <p>Description: {props.todoItem.description}</p>
          <p>
            Module Tagged To: {props.todoItem.module}{" "}
            {props.todoItem.module_title}
          </p>
        </div>
      </Collapse>
    </>
  );
};

export default TodoItem;
