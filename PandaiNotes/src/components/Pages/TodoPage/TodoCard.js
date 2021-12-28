import { React, useState } from "react";
import { Card, Form, InputGroup, Button } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import classes from "./TodoCard.module.scss";
import TodoItem from "./TodoItem";
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
      {/* To show when you want to add an item to the Todo */}
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
              <TodoItem todoItem={todoItem} onDeleteItem={deleteItemHandler} />
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
