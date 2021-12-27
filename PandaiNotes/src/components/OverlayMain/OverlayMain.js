import React, { useState, useReducer } from "react";
import { Card } from "react-bootstrap";

import moduleCard from "../SmallComponents/moduleCard/moduleCard";
import TodoPage from "../Pages/TodoPage/TodoPage";
import FileExplorerPage from "../Pages/FileExplorerPage/FileExplorerPage";

import { Container, Row, Col } from "react-bootstrap";

// function reducer(state, action) {
//   switch (action.type) {
//     case 'todo':
//       initialPage = "files"
//       return ;
//     case 'files':
//       initialPage = "todo"
//       return ;
//     default:
//       throw new Error();
//   }
// }

const OverlayMain = (props) => {
  const [overlayPage, setOverlayPage] = useState(<todoPage />);
  return (
    <Container>
      <Row>
        <Col>
          <TodoPage />
        </Col>
      </Row>
    </Container>
  );
};

export default OverlayMain;
