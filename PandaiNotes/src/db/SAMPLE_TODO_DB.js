export const TODO_ITEMS_ONE = [
  {
    id: 1,
    module: "CS1101S",
    module_title: "Programming Methodology",
    title: "Programming Homework Urgent",
    description: "Hello World!",
    deadline: new Date(2021, 12, 10),
  },
  {
    id: 2,
    module: "MA1521",
    module_title: "Calculus for Computing",
    title: "Math Homework",
    description: "Submit assignments 1, 2, 3",
    deadline: new Date(2022, 1, 3),
  },
  {
    id: 3,
    module: "MA2001",
    module_title: "Linear Algebra",
    title: "Math Homework 2",
    description: "Difficult Module",
    deadline: new Date(2022, 1, 5),
  },
  {
    id: 4,
    module: "CS1231S",
    module_title: "Discrete Structures",
    title: "Math Homework 3",
    description: "Quiz 1, 2, 3",
    deadline: new Date(2021, 12, 10),
  },
  {
    id: 5,
    module: "CS1231S",
    module_title: "Discrete Structures",
    title: "Math Homework 3",
    description: "Quiz 1, 2, 3",
    deadline: new Date(2021, 12, 10),
  },
  {
    id: 6,
    module: "CS1231S",
    module_title: "Discrete Structures",
    title: "Math Homework 3",
    description: "Quiz 1, 2, 3",
    deadline: new Date(2021, 12, 10),
  },
];

export const TODO_ITEMS_TWO = [
  {
    id: 1,
    module: "CS2040S",
    title: "Data Structures and Algorithms",
    description: "Submit homework as soon as possible!",
    deadline: new Date(2021, 12, 10),
  },
  {
    id: 2,
    module: "CS2040S",
    title: "Data Structures and Algorithms",
    description: "Prepare lab report",
    deadline: new Date(2022, 3, 4),
  },
];

export const TODO_CATEGORIES = [
  {
    id: 1,
    title: "Y1S1 Homework",
    todo_items: TODO_ITEMS_ONE,
    color: "#5534eb",
  },
  {
    id: 2,
    title: "Y1S2 Homework",
    todo_items: TODO_ITEMS_TWO,
    color: "#00b029",
  },
  { id: 3, title: "Urgent Work", todo_items: TODO_ITEMS_TWO, color: "#8f001f" },
  { id: 4, title: "Boring Work", todo_items: TODO_ITEMS_TWO, color: "#000878" },
  {
    id: 5,
    title: "Important Work",
    todo_items: TODO_ITEMS_TWO,
    color: "#ED1C24",
  },
];
