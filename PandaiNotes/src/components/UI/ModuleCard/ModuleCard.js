import React from "react";
import classes from "./ModuleCard.module.css";

import { Card } from "react-bootstrap";

const ModuleCard = (props) => {
  return (
    <>
      <Card id={props.mod_code} className={`${classes["modulecard"]} flex-column`} style={{ width: "18rem" } }>
        <Card.Body id={props.mod_code}>
          <Card.Title id={props.mod_code} className={`${classes["moduletitle"]} flex-column`}>
            {props.mod_code}
          </Card.Title>
          <Card.Subtitle id={props.mod_code}>{props.mod_name}</Card.Subtitle>
        </Card.Body>
      </Card>
    </>
  );
};

export default ModuleCard;
