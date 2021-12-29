import React, { useState } from "react";
import classes from "./Todo.module.scss";

import { Container, Dropdown, Row, Col, Button } from "react-bootstrap";

import { MODULES } from "../../../db/SAMPLE_MODULES_DB";
import { TODO_CATEGORIES } from "../../../db/SAMPLE_TODO_DB";
import TodoCard from "./TodoCard";
import TodoCategoryModal from "./TodoCategoryModal";
import TodoItemModal from "./TodoItemModal";

// HELPER FUNCTIONS
function sliceIntoChunks(arr, chunkSize) {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
}

const TodoPage = (props) => {
  const [todoCategories, setTodoCategories] = useState(TODO_CATEGORIES);
  const chunks = sliceIntoChunks(todoCategories, 3);

  const chooseModuleHandler = (evt) => {
    console.log(evt.target.title);
  };

  // Handle Todo Items
  const addTodoHandler = (todoItemObject) => {
    console.log("Added a Todo in TodoPage");
    const newTodoItemObject = { ...todoItemObject };
    newTodoItemObject["id"] = newTodoItemObject.todo_item_id;
    delete newTodoItemObject.category_item_id;
    delete newTodoItemObject.todo_item_id;

    setTodoCategories((prevState) => {
      // ERROR HERE
      let newState = prevState.filter(
        (category) => category.id !== todoItemObject.category_item_id
      ); // Remove the Category that's being added to first
      let category_id_to_filter = todoItemObject.category_item_id;
      console.log("ID to filter is: " + category_id_to_filter);
      const newCategory = prevState.filter(
        (category) => category.id === todoItemObject.category_item_id
      ); // Get the Category that's being added to, then add the new todo item to it

      console.log(newCategory[0].todo_items.push(newTodoItemObject));
      console.log("New category item is: ");
      console.log(newCategory);

      newState = [newCategory[0], ...newState];
      console.log("New state is: ");
      console.log(newState);
      return newState;
    });
  };

  const removeTodoHandler = (todoItemID, todoCategoryID) => {
    console.log("Removing Todo in TodoPage");
    console.log(todoItemID);
    setTodoCategories((prevState) => {
      let newState = prevState.filter(
        (category) => category.id !== todoCategoryID
      ); // Remove the Category that's being removed from first
      const newCategory = prevState.filter(
        (category) => category.id === todoCategoryID
      ); // Get the Category that's being removed from to, then remove the selected todo item

      // newCategory[0].todo_items = newCategory[0].todo_items.filter((item) => item.id !== todoItemID);
      console.log(
        (newCategory[0].todo_items = newCategory[0].todo_items.filter(
          (item) => item.id.toString() !== todoItemID
        ))
      );
      console.log("New category item is: ");
      console.log(newCategory);

      newState = [newCategory[0], ...newState];
      console.log("New state is: ");
      console.log(newState);
      return newState;
    });
  };

  // todoUpdatedItemObject should contain just the field + ID
  const updateTodoHandler = (
    todoItemID,
    todoCategoryID,
    todoUpdatedItemObject
  ) => {
    console.log("Updating Todo");
    console.log(todoUpdatedItemObject);
  };

  // Handle Todo Categories
  const addTodoCategoryHandler = (todoCategoryObject) => {
    console.log("Added a Todo Category");
    if (!Object.keys(todoCategoryObject).includes("todo_items")) {
      todoCategoryObject = { ...todoCategoryObject, todo_items: [] };
    }
    console.log(todoCategoryObject);

    setTodoCategories((prevState) => {
      let newState = prevState.filter(
        (category) => category.id !== todoCategoryObject.id
      );
      newState = [todoCategoryObject, ...newState];
      console.log(newState);
      return newState;
    });
  };

  const removeTodoCategoryHandler = (category_id) => {
    console.log("Removing Todo Category");
    setTodoCategories((prevState) => {
      let newState = prevState.filter(
        (category) => category.id !== category_id
      );
      console.log(newState);
      return newState;
    });
  };

  const updateTodoCategoryHandler = (evt) => {
    console.log("Updating Todo Category");
  };

  return (
    <Container>
      {/* Title */}
      <Row>
        <div className={classes.title}>To - Do</div>
      </Row>

      <hr className={classes["solid-divider"]}></hr>

      {/* Select modules, add todo */}
      <Row>
        <Col>
          <Dropdown>
            <Dropdown.Toggle>Select Modules</Dropdown.Toggle>
            <Dropdown.Menu>
              {MODULES.map((module) => (
                <Dropdown.Item
                  key={module.key}
                  title={module.module_name}
                  onClick={chooseModuleHandler}
                >
                  {module.module_name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col xs={9}></Col>
        <Col>
          <TodoCategoryModal
            useCase="ADD"
            onAddTodoCategory={addTodoCategoryHandler}
          />
        </Col>
      </Row>

      {/* Display cards */}
      {chunks.map((chunk) => (
        <Row
          key={Math.random()}
          className="mt-3 ml-3 mr-3 justify-content-around"
        >
          {chunk.map((category) => {
            return (
              <TodoCard
                key={category.id}
                category_id={category.id}
                cardTitle={category.title}
                cardColor={category.color}
                todoItems={category.todo_items}
                className="m-3"
                onAddTodo={addTodoHandler}
                onRemoveTodo={removeTodoHandler}
                onUpdateTodo={updateTodoHandler}
                onAddTodoCategory={addTodoCategoryHandler}
                onRemoveTodoCategory={removeTodoCategoryHandler}
                onUpdateTodoCategory={updateTodoCategoryHandler}
              />
            );
          })}
        </Row>
      ))}
    </Container>
  );
};

export default TodoPage;
