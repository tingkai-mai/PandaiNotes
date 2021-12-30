import React from "react";
import classes from "./CommunityPage.module.scss";
import ModuleSection from "./ModuleSection";
import { MODULES } from "../../../db/SAMPLE_MODULES_CURRENT_DB";
import { MODULES_ALL } from "../../../db/SAMPLE_MODULES_ALL_DB";
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import { BsFilterSquare } from "react-icons/bs";

function CommunityPage(props) {
  return (
    <Container>
      <Row id={classes.title}>Community</Row>
      <hr className={classes["solid-divider"]} />

      <Row>
        <InputGroup>
          <FormControl placeholder="Filter modules..."></FormControl>
          <BsFilterSquare
            size={30}
            className={`${classes["icon-filter"]} m-3`}
          />
        </InputGroup>
      </Row>

      <Row>
        <div className={classes["subheader"]}>Current Modules</div>
        <hr className={classes["solid-divider"]} />
        {MODULES.map((module) => {
          return <ModuleSection module={module} />;
        })}
      </Row>

      <Row>
        <div className={classes["subheader"]}>All Modules</div>
        <hr className={classes["solid-divider"]} />
        {MODULES_ALL.map((module) => {
          return <ModuleSection module={module} />;
        })}
      </Row>
    </Container>
  );
}

export default CommunityPage;
