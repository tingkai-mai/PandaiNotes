import { React, useState } from "react";
import { Container, Row, Button, Form, Col } from "react-bootstrap";
import ModuleFileExplorer from "../ModuleFileExplorer/ModuleFileExplorer";
import ModuleFileViewer from "../../HomeComponents/ModuleFileViewer/ModuleFileViewer";
import classes from "./ModuleFileTemplate.module.css";
import Searchbar from "../../UI/Searchbar/Searchbar";

const ModuleFileTemplate = (props) => {
  const [currPage, setModulePage] = useState(false);

  const onCloseOverlay = () => {
    setModulePage(false);
  };

  return (
    <>
      <Container>
        {currPage ? (
          <Button onClick={() => onCloseOverlay()} variant="warning">
            Back to Modules
          </Button>
        ) : null}
        <Row>
          <div className={`${classes["title"]} flex-column`}>
            {props.mainHeader}
          </div>
        </Row>
        <hr></hr>
          {currPage ? null : <Searchbar /> }
          {currPage ? null : <hr></hr> }
        {currPage === false ? (
          <ModuleFileExplorer onChangeModule={setModulePage} />
        ) : (
          <ModuleFileViewer />
        )}
      </Container>
    </>
  );
};

export default ModuleFileTemplate;
