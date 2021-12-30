import React from "react";
import classes from "./ModuleCard.module.css";

import { Card } from "react-bootstrap";
import { MODULES } from "../../../db/SAMPLE_MODULES_DB";

const ModuleCard = (props) => {
  return (
    <>
      <Card style={{ width: "18rem" }} className={`${classes["modulecard"]} flex-column`}>
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
