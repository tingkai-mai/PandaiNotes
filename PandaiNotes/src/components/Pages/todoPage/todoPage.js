import React, { useState } from "react";
import classes from "./Todo.module.css";

import { Container, Dropdown, Row, Col, Button } from "react-bootstrap";
import { AiOutlinePlusCircle } from "react-icons/ai";

import { MODULES } from "../../../db/SAMPLE_MODULES_DB";
import { TODO_CATEGORIES } from "../../../db/SAMPLE_TODO_DB";
import ModuleCard from "../../UI/Card/ModuleCard";

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
  const addTodoHandler = (evt) => {
    console.log("Added a Todo");
  };

  const removeTodoHandler = (evt) => {
    console.log("Removing Todo");
  };

  const updateTodoHandler = (evt) => {
    console.log("Updating Todo");
  };

  // Handle Todo Categories
  const addTodoCategoryHandler = (evt) => {
    console.log("Added a Todo Category");
  };

  const removeTodoCategoryHandler = (evt) => {
    console.log("Removing Todo Category");
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
          <Button onClick={addTodoHandler}>
            <AiOutlinePlusCircle />
          </Button>
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
              <ModuleCard
                key={category.id}
                category_key={category.id}
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
