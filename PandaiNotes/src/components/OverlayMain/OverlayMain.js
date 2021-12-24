import React, { useState, useReducer } from "react";
import { Card } from "react-bootstrap";

import moduleCard from "../SmallComponents/moduleCard/moduleCard";
import todoPage from "../Pages/todoPage/todoPage";
import fileExplorerPage from "../Pages/fileExplorerPage/fileExplorerPage";

import { Container, Row, Col } from "react-bootstrap";

const initialPage = "todo";

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
  const [overlayPage, setOverlayPage] = useState(true);
  return (
    <>
      <Container>
        <Row>
          <Col>
            {overlayPage
              ? <todoPage />
              : <fileExplorerPage />
            }
          </Col>
        </Row>
      </Container>
    </>
  )
};

export default OverlayMain;
