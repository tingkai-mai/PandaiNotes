import React, { useState, useReducer } from "react";
import { Card } from "react-bootstrap";

import moduleCard from "../SmallComponents/moduleCard/moduleCard";
import todoPage from "../Pages/todoPage/todoPage";
import fileExplorerPage from "../Pages/fileExplorerPage/fileExplorerPage";

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

  // lifting up the state

  const SwitchPage = (overlayPageComponent) => {
    switch(overlayPageComponent) {
      case "todo":
        return <todoPage></todoPage>;

    }
  }
  
  return (
    <>
      <Container>
        <Row>
          <Col>
            <todoPage></todoPage>
          </Col>
        </Row>
      </Container>
    </>
  )
};

export default OverlayMain;
