import React from "react";
import { Card } from "react-bootstrap";
import classes from "./ModuleSection.module.scss";
import nus_logo from "./nus_logo.png";

const ModuleSection = (props) => {
  return (
    <Card
      className={`${classes["card"]} d-flex flex-row align-items-center p-1`}
    >
      <Card.Img
        variant="left"
        src={nus_logo}
        className={`${classes.moduleIcon}`}
      ></Card.Img>
      <Card.Title className={`m-3 ${classes["title"]}`}>
        {props.module.module_code}
      </Card.Title>
      <Card.Text className={classes["text"]}>
        {props.module.module_name}
      </Card.Text>
    </Card>
  );
};

export default ModuleSection;
