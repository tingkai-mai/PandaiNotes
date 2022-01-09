import { React, useState } from "react";
import { Container, Row, Button, Col } from "react-bootstrap";

import ModuleFileExplorer from "../ModuleFileExplorer/ModuleFileExplorer";
import ModuleFileViewer from "../../HomeComponents/ModuleFileViewer/ModuleFileViewer";
import classes from "./ModuleFileTemplate.module.css";
import Searchbar from "../../UI/Searchbar/Searchbar";
import { MODULES_ALL_IN_NUS } from "../../../db/SAMPLE_MODULES_MASTER";

// icons
import { BsChevronDoubleLeft } from "react-icons/bs";


const ModuleFileTemplate = (props) => {
  // currPage : manages which page to show
  const [currPage, setModulePage] = useState(false);
  // currMod : stores info on which mod is currently selected and passes it onto ModuleFileViewer
  const [currMod, setCurrMod] = useState("none");

  const onCloseOverlay = () => {
    setModulePage(false);
  };

  // method of retrieving module description from module code
  var currModDesc = MODULES_ALL_IN_NUS.filter((mod) => mod.module_code === currMod);


  return (
    // both modules are using the same headers that vary based on currPage 
    <>
      <Container>
        {currPage ? (
          <Button onClick={() => onCloseOverlay()} variant="warning">
            < BsChevronDoubleLeft /> Back to Modules
          </Button>
        ) : null}
        <Row>
          <Col className={`${classes["title"]} flex-column`}>
            {props.mainHeader}
          </Col>
          <Col>
            <div className={`${classes["modtitle"]} flex-column`}>{currPage ? currMod : null}</div>
            <div className={`${classes["moddesc"]} flex-column`}>{currModDesc.module_name}</div>
          </Col>
        </Row>
        <hr></hr>
          {currPage ? null : <Searchbar /> }
          {currPage ? null : <hr></hr> }
        {/*makes the switch between the FileExplorer and FileViewer*/}
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
