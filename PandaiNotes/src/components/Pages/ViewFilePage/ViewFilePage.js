import { React } from "react";
import classes from "./ViewFilePage.module.scss";
import ModuleFileTemplate from "../../HomeComponents/ModuleFileTemplate/ModuleFileTemplate";

const ViewFilePage = (props) => {
  return (
    <>
      <ModuleFileTemplate mainHeader={"Files"} useCase="VIEWFILE" />
    </>
  );
};

export default ViewFilePage;
