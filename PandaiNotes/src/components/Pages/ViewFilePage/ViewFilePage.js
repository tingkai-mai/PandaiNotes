import { React } from "react";
import classes from "./ViewFilePage.module.scss";
import ModuleFileTemplate from "../../HomeComponents/ModuleFileTemplate/ModuleFileTemplate";
import { Container, Row } from "react-bootstrap";

const ViewFilePage = (props) => {
  return (
    <>
      <Container>
        <ModuleFileTemplate mainHeader="Files" useCase="VIEWFILE" />
      </Container>
    </>
  );
};

export default ViewFilePage;
