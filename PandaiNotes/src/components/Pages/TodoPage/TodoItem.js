import { React, useState, useRef } from "react";
import { Form, Collapse, Button } from "react-bootstrap";
import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import classes from "./TodoItem.module.scss";
import DateTimePicker from "react-datetime-picker";

const TodoItem = (props) => {
  // console.log(props);
  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [calendarValue, setCalendarValue] = useState(props.todoItem.deadline);

  // Checkbox
  const checkboxHandler = (evt) => {
    console.log(evt.target.checked);
    console.log(evt.target.value);
  };

  const name = useRef();
  const description = useRef();
  const moduleTagged = useRef();

  const openUpdateItemHandler = (evt) => {
    setIsEditing(true);
  };

  const updateItemhandler = (evt) => {
    let module = moduleTagged.current.value;
    console.log(module.slice(0, 6));
    const newTodoObject = {
      todo_item_id: props.todoItem._id,
      category_item_id: props.category_id,
      module: null,
      // module: { code: module.slice(0, 6), name: module.slice(7) },
      name: name.current.value,
      description: description.current.value,
      deadline: calendarValue,
    };
    setOpen(!open);
    props.onUpdateTodo(newTodoObject);
  };

  const deleteItemHandler = (evt) => {
    console.log("Deleting Item in TodoItem");
    console.log(evt);
    props.onDeleteItem(evt);
  };

  const openItemHandler = () => {
    setOpen(!open);
  };
  return (
    <>
      {/* Checkbox */}
      <Form.Check
        key={props.todoItem._id}
        className={`${classes.inputItem}`}
        value={props.todoItem._id}
      >
        <Form.Check.Input
          onClick={checkboxHandler}
          type="checkbox"
          value={props.todoItem._id}
        />
        <Form.Check.Label
          title={props.todoItem._id}
          onClick={openItemHandler}
          className="fw-light"
          // style={{ textDecoration: "line-through" }}
        >
          {props.todoItem.description}
        </Form.Check.Label>
        <MdDeleteOutline
          onClick={deleteItemHandler}
          value={props.todoItem._id}
        />
      </Form.Check>

      {/* To show either view or editing */}
      <Collapse in={open}>
        {/* View Todo Content */}
        {!isEditing ? (
          <div>
            <p>Name: {props.todoItem.name}</p>
            <p>Deadline: {String(props.todoItem.deadline)}</p>
            <p>Description: {props.todoItem.description}</p>
            <p>
              Module Tagged To: {props.todoItem.module}{" "}
              {props.todoItem.module_title}
            </p>
            <AiOutlineEdit onClick={openUpdateItemHandler} />
          </div>
        ) : (
          // Edit Todo Content
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name: </Form.Label>
              <Form.Control defaultValue={props.todoItem.name} ref={name} />
              <Form.Label>Deadline: </Form.Label>
              <DateTimePicker
                onChange={setCalendarValue}
                value={calendarValue}
              />
              <Form.Label>Description: </Form.Label>
              <Form.Control
                defaultValue={props.todoItem.description}
                ref={description}
              />
              <Form.Label>Module Tagged To: </Form.Label>
              <Form.Select
                defaultValue={
                  String(props.todoItem.module) +
                  " " +
                  String(props.todoItem.module_title)
                }
                ref={moduleTagged}
              >
                {" "}
                {props.modules.map((module) => {
                  return (
                    <option
                      key={module._id}
                    >{`${module.code} ${module.name}`}</option>
                  );
                })}
              </Form.Select>
            </Form.Group>
            <Button
              variant="primary"
              onClick={updateItemhandler}
              className="mb-3"
            >
              Save
            </Button>
          </Form>
        )}
      </Collapse>
    </>
  );
};

export default TodoItem;
