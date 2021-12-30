import React from "react";
import classes from "./ModuleCard.module.css";

import { Card } from "react-bootstrap";

const ModuleCard = (props) => {
  return (
    <>
      <Card className={`${classes["modulecard"]} flex-column`} style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title className={`${classes["moduletitle"]} flex-column`}>
            {props.mod_code}
          </Card.Title>
          <Card.Subtitle>{props.mod_name}</Card.Subtitle>
        </Card.Body>
      </Card>
    </>
  );
};

export default ModuleCard;
