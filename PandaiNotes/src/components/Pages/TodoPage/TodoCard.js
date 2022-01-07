import { React, useState } from "react";
import { Card, InputGroup, Button } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import classes from "./TodoCard.module.scss";
import TodoItem from "./TodoItem";
import TodoItemModal from "./TodoItemModal";
import TodoCategoryModal from "./TodoCategoryModal";

const TodoCard = (props) => {
  const todoItems = props.todoItems;
  // console.log(props);

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

  const modifyTodoCategoryHandler = (todoCategoryObject) => {
    props.onAddTodoCategory({ ...todoCategoryObject, todo_items: todoItems });
  };

  const deleteTodoCategoryHandler = (evt) => {
    console.log("Deleting category ID: " + props.category_id);
    props.onRemoveTodoCategory(props.category_id);
  };

  const updateTodoItemHandler = (todoItemObject) => {
    props.onUpdateTodo(todoItemObject);
  };

  return (
    <>
      {/* To show when you want to add an item to the Todo */}
      <TodoItemModal
        show={showModal}
        onOpenModal={openModalHandler}
        onCloseModal={closeModalHandler}
        onAddTodoItem={addTodoItemHandler}
        category_id={props.category_id}
        modules={props.modules}
      />

      <Card
        className={`${classes.cardBox} p-3 d-flex flex-column rounded-2`}
        style={{ borderColor: props.cardColor }}
      >
        <Card.Title>
          <div className="d-flex justify-content-between">
            {props.cardTitle}{" "}
            <MdDeleteOutline onClick={deleteTodoCategoryHandler} />
          </div>
        </Card.Title>
        <hr className={`${classes["linespacing"]} flex-column`}></hr>
        <InputGroup
          className={`d-flex flex-column`}
          onContextMenu={contextMenuHandler}
        >
          {/* Listing out TodoItems */}
          {todoItems.map((todoItem) => {
            return (
              <TodoItem
                key={todoItem._id}
                todoItem={todoItem}
                onDeleteItem={deleteItemHandler}
                category_id={props.category_id}
                onUpdateTodo={updateTodoItemHandler}
                modules={props.modules}
              />
            );
          })}
        </InputGroup>
        <div className="d-flex justify-content-between">
          <Button
            className="m-2 rounded-circle"
            variant="outline-primary"
            onClick={openAddTodoItemModalHandler}
          >
            <AiOutlinePlus />
          </Button>
          <TodoCategoryModal
            category_id={props.category_id}
            onAddTodoCategory={modifyTodoCategoryHandler}
            useCase="EDIT"
          />
        </div>
      </Card>
      <br />
    </>
  );
};

export default TodoCard;
