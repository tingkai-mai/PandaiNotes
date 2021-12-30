import React from "react";
import { Card } from "react-bootstrap";
import { BsBook } from "react-icons/bs";
import nus_logo from "./nus_logo.png";

const ModuleSection = (props) => {
  return (
    <Card className="d-flex">
      <Card.Img variant="left" src={nus_logo}></Card.Img>
      <Card.Title>{props.module.module_code}</Card.Title>
      <Card.Text>{props.module.module_name}</Card.Text>
    </Card>
  );
};

export default ModuleSection;
