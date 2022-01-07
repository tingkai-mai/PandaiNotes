import React, { createRef, useState, useEffect } from "react";
import classes from "./Todo.module.scss";

import { Container, Row, Col, Form, FloatingLabel } from "react-bootstrap";

import { MODULES } from "../../../db/SAMPLE_MODULES_CURRENT_DB";
import { TODO_CATEGORIES } from "../../../db/SAMPLE_TODO_DB";
import TodoCard from "./TodoCard";
import TodoCategoryModal from "./TodoCategoryModal";

const axios = require("axios");

// HELPER FUNCTIONS
function sliceIntoChunks(arr, chunkSize) {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
}

function saveTodoCategory(title, color, TodoItems) {
  axios
    .post("http://localhost:3001/api/v1/cats/pushCat", {
      title: title,
      color: color,
      todo: TodoItems,
    })
    .then((res) => {
      console.log("Successfully saved TodoCategory");
      console.log(`statusCode: ${res.status}`);
      console.log(res);
    })
    .catch((error) => {
      console.error(error);
    });
}

const TodoPage = (props) => {
  const [todoCategories, setTodoCategories] = useState([]);
  const [modules, setModules] = useState([]);
  async function getAllCategories() {
    let categories = await axios.get(
      "http://localhost:3001/api/v1/cats/getAllCats"
    );
    categories = categories.data.data.cats;
    setTodoCategories(categories);
  }

  async function getModules() {
    let modules = await axios.get(
      "http://localhost:3001/api/v1/modules/getAllModules"
    );
    setModules(modules.data.data.modules);
  }

  useEffect(() => {
    console.log("Setting categories");
    getAllCategories();
    getModules();
  }, []);

  const chunks = sliceIntoChunks(todoCategories, 3);
  console.log(chunks);

  // Filter categories containing only modules that fit the requirement
  const filteredModule = createRef();
  const chooseModuleHandler = (evt) => {
    console.log(filteredModule.current.value);
    if (filteredModule.current.value === "ALL") {
      setTodoCategories(TODO_CATEGORIES);
    } else {
      setTodoCategories(() => {
        let filteredCategories = JSON.parse(JSON.stringify(TODO_CATEGORIES));
        filteredCategories = filteredCategories.map((category) => {
          category.todo_items = category.todo_items.filter((item) => {
            return item.module === filteredModule.current.value;
          });
          return category;
        });

        return filteredCategories;
      });
    }
  };

  // Handle Todo Items
  const addTodoHandler = (todoItemObject) => {
    console.log("Added a Todo in TodoPage");
    const newTodoItemObject = { ...todoItemObject };
    newTodoItemObject["id"] = newTodoItemObject.todo_item_id;
    delete newTodoItemObject.category_item_id;
    delete newTodoItemObject.todo_item_id;

    setTodoCategories((prevState) => {
      let newState = prevState.filter(
        (category) => category._id !== todoItemObject.category_item_id
      ); // Remove the Category that's being added to first
      let category_id_to_filter = todoItemObject.category_item_id;
      console.log("ID to filter is: " + category_id_to_filter);
      const newCategory = prevState.filter(
        (category) => category._id === todoItemObject.category_item_id
      ); // Get the Category that's being added to, then add the new todo item to it

      console.log(newCategory[0].todo.push(newTodoItemObject));
      console.log("New category item is: ");
      console.log(newCategory);

      newState = [newCategory[0], ...newState];
      console.log("New state is: ");
      console.log(newState);
}
      return newState;
    });
  };

  const removeTodoHandler = (todoItemID, todoCategoryID) => {
    console.log("Removing Todo in TodoPage");
    console.log("todoItemID:", todoItemID);
    console.log("todoCategoryID:", todoItemID);
    setTodoCategories((prevState) => {
      let newState = prevState.filter(
        (category) => category._id !== todoCategoryID
      ); // Remove the Category that's being removed from first
      console.log(newState);

      const newCategory = prevState.filter(
        (category) => category._id === todoCategoryID
      ); // Get the Category that's being removed from to, then remove the selected todo item

      console.log(newCategory);
      console.log(
        (newCategory[0].todo = newCategory[0].todo.filter(
          (item) => String(item._id) !== todoItemID
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

  // todoUpdatedItemObject should contain just the field + ID of todoItem
  const updateTodoHandler = (todoItemObject) => {
    console.log(todoItemObject);
    console.log("Updating item...");
    const newTodoItemObject = JSON.parse(JSON.stringify(todoItemObject));
    const category_id = newTodoItemObject.category_item_id;
    newTodoItemObject["id"] = newTodoItemObject.todo_item_id;
    delete newTodoItemObject.category_item_id;
    delete newTodoItemObject.todo_item_id;

    console.log(newTodoItemObject);

    setTodoCategories((prevState) => {
      // Filter out unedited ItemCategories
      let newState = prevState.filter((category) => {
        return category._id !== category_id;
      });

      // Grab the edited ItemCategory
      let oldItemCategory = prevState.filter((category) => {
        return category._id === category_id;
      })[0];

      // Grab the unedited todo items in the edited ItemCategory
      oldItemCategory.todo = oldItemCategory.todo.filter((item) => {
        return item._id !== todoItemObject.todo_item_id;
      });

      // Add the new todo item to the edited ItemCategory
      let newItemCategory = JSON.parse(JSON.stringify(oldItemCategory));
      newItemCategory.todo = [newTodoItemObject, ...newItemCategory.todo];

      // Add the new ItemCategory to the newState
      newState = [newItemCategory, ...newState];

      console.log("Prevstate", prevState);
      console.log("Newstate", newState);
      return newState;
    });
  };

  // Handle Todo Categories
  const addTodoCategoryHandler = (todoCategoryObject) => {
    console.log("Added a Todo Category");
    console.log(todoCategoryObject);
    saveTodoCategory(
      todoCategoryObject.title,
      todoCategoryObject.color,
      todoCategoryObject.todo_items
    );

    setTodoCategories((prevState) => {
      let newState = [todoCategoryObject, ...prevState];
      console.log("New Category Objects are: ", newState);
      return newState;
    });
  };

  const removeTodoCategoryHandler = (category_id) => {
    console.log("Removing Todo Category");
    setTodoCategories((prevState) => {
      let newState = prevState.filter(
        (category) => category._id !== category_id
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
        <Col xs={3}>
          <Form>
            <FloatingLabel label="Choose a module to filter...">
              <Form.Select onChange={chooseModuleHandler} ref={filteredModule}>
                <option value="ALL">All modules...</option>
                {modules.map((module) => (
                  <option key={module._id} value={module.code}>
                    {module.code + " " + module.name}
                  </option>
                ))}
              </Form.Select>
            </FloatingLabel>
          </Form>
        </Col>
        <Col xs={7}></Col>
        <Col xs={2}>
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
                key={category._id}
                category_id={category._id}
                cardTitle={category.title}
                cardColor={category.color}
                todoItems={category.todo}
                modules={modules}
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
