import { React } from "react";
import ModuleFileTemplate from "../../HomeComponents/ModuleFileTemplate/ModuleFileTemplate";
import { Container } from "react-bootstrap";

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
