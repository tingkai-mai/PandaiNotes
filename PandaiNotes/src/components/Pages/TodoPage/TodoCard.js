import { React, useState } from "react";
import { Card, Form, InputGroup, Button } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import classes from "./TodoCard.module.scss";
import TodoItemModal from "./TodoItemModal";

const TodoCard = (props) => {
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

  // TODO HANDLERS
  const openAddTodoItemModalHandler = () => {
    console.log("Opening modal to add a todo item");
    openModalHandler();
  };

  const addTodoItemHandler = (todoItemObject) => {
    console.log("Adding a todo item in TodoCard");
    console.log(todoItemObject);
    props.onAddTodo(todoItemObject);
  };

  const deleteItemHandler = (evt) => {
    console.log("Deleting this item ID in TodoCard: ");
    console.log(evt.target.getAttribute("value"));
    props.onRemoveTodo(evt.target.getAttribute("value"), props.category_id);
  };

  const contextMenuHandler = (evt) => {
    // evt.preventDefault();
    console.log("Context menu called");
  };

  const todoItems = props.todoItems;
  return (
    <>
      <TodoItemModal
        show={showModal}
        onOpenModal={openModalHandler}
        onCloseModal={closeModalHandler}
        onAddTodoItem={addTodoItemHandler}
        category_id={props.category_id}
      />

      <Card
        className={`${classes.cardBox} p-3 d-flex flex-column rounded-2`}
        style={{ borderColor: props.cardColor }}
      >
        <Card.Title>{props.cardTitle}</Card.Title>
        <InputGroup
          className={`d-flex flex-column`}
          onContextMenu={contextMenuHandler}
        >
          {/* Listing out TodoItems */}
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
                  title={todoItem.id}
                  // style={{ textDecoration: "line-through" }}
                >
                  {todoItem.description}
                </Form.Check.Label>
                <MdDeleteOutline
                  onClick={deleteItemHandler}
                  value={todoItem.id}
                />
              </Form.Check>
            );
          })}
        </InputGroup>
        <Button
          className="align-self-end m-2 rounded-circle"
          variant="outline-primary"
          onClick={openAddTodoItemModalHandler}
        >
          <AiOutlinePlus />
        </Button>
      </Card>
      <br />
    </>
  );
};

export default TodoCard;
