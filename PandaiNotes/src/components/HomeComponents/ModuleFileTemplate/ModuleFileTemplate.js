import { React, useState } from "react";
import { Container, Row, Button, Form, Col } from "react-bootstrap";
import ModuleFileExplorer from "../ModuleFileExplorer/ModuleFileExplorer";
import ModuleFileViewer from "../../HomeComponents/ModuleFileViewer/ModuleFileViewer";
import classes from "./ModuleFileTemplate.module.css";
import Searchbar from "../../UI/Searchbar/Searchbar";
import { BsChevronDoubleLeft } from "react-icons/bs";

const ModuleFileTemplate = (props) => {
  const [currPage, setModulePage] = useState(false);
  const [currMod, setCurrMod] = useState("none");

  const onCloseOverlay = () => {
    setModulePage(false);
  };


  return (
    <>
      <Container>
        {currPage ? (
          <Button onClick={() => onCloseOverlay()} variant="warning">
            < BsChevronDoubleLeft /> Back to Modules
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
          <ModuleFileExplorer onChangeModName={setCurrMod}  onChangeModule={setModulePage} />
        ) : (
          <ModuleFileViewer viewcurrMod={currMod}/>
        )}
      </Container>
    </>
  );
};

export default ModuleFileTemplate;
