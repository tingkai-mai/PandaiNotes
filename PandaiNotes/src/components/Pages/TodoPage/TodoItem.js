import { React, useState, useRef } from "react";
import { Form, Collapse, Button } from "react-bootstrap";
import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import classes from "./TodoItem.module.scss";
import DateTimePicker from "react-datetime-picker";

const TodoItem = (props) => {
  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [calendarValue, setCalendarValue] = useState(props.todoItem.deadline);

  // Checkbox
  const checkboxHandler = (evt) => {
    console.log(evt.target.checked);
    console.log(evt.target.value);
  };

  const title = useRef();
  const description = useRef();
  const moduleTagged = useRef();

  const openUpdateItemHandler = (evt) => {
    setIsEditing(true);
  };

  const updateItemhandler = (evt) => {
    const newTodoObject = {
      todo_item_id: props.item_id,
      category_item_id: props.category_id,
      module: moduleTagged.current.value,
      module_title: props.todoItem.module_title,
      title: title.current.value,
      description: description.current.value,
      deadline: calendarValue,
    };
    setOpen(!open);
    props.onUpdateTodo(newTodoObject);
  };

  const deleteItemHandler = (evt) => {
    console.log("Deleting Item in TodoItem");
    props.onDeleteItem(evt);
  };

  const openItemHandler = () => {
    setOpen(!open);
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
          onClick={openItemHandler}
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
        {!isEditing ? (
          <div>
            <p>Title: {props.todoItem.title}</p>
            <p>Deadline: {props.todoItem.deadline.toString()}</p>
            <p>Description: {props.todoItem.description}</p>
            <p>
              Module Tagged To: {props.todoItem.module}{" "}
              {props.todoItem.module_title}
            </p>
            <AiOutlineEdit onClick={openUpdateItemHandler} />
          </div>
        ) : (
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title: </Form.Label>
              <Form.Control defaultValue={props.todoItem.title} ref={title} />
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
                  props.todoItem.module.toString() +
                  " " +
                  props.todoItem.module_title.toString()
                }
                ref={moduleTagged}
              >
                {" "}
                {props.modules.map((module) => {
                  return (
                    <option
                      key={module.module_code}
                    >{`${module.module_code} ${module.module_name}`}</option>
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
