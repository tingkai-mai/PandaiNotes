import { React, useState } from "react";
import { Container, Row } from "react-bootstrap";
import classes from "./ViewFile.module.css";
import ModuleFilesExplorer from "../../HomeComponents/ModuleFileExplorer/ModuleFileExplorer";
import SingleModulePage from "../SingleModulePage/SingleModulePage";


const ViewFilePage = (props) => {

  const [currPage, setModulePage] = useState("main");
  
  return <>
    <Container>
      { currPage === "main" ? <ModuleFilesExplorer onChangeModule={setModulePage} /> : <SingleModulePage currModule={currPage}/> }
    </Container>
  </>;
};

export default ViewFilePage;
