import React, { useState, useReducer } from "react";
import { Card } from "react-bootstrap";

import ModuleCard from "../SmallComponents/moduleCard/ModuleCard";
import TodoPage from "../Pages/todoPage/TodoPage";
import FileExplorerPage from "../Pages/fileExplorerPage/FileExplorerPage";

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
  const [overlayPage, setOverlayPage] = useState(<TodoPage />);

  return (
    <Container>
      <Row>
        <Col>
          {overlayPage}
        </Col>
      </Row>
    </Container>
  );
};

export default OverlayMain;
