import classes from "./SummaryPage.module.scss";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { MODULES_ALL_IN_NUS } from "../../../db/SAMPLE_MODULES_MASTER";
import React, { useState, useReducer, useRef } from "react";
import SummaryCardGroup from "./SummaryCardGroup";
import Select from "react-select";
const filterReducer = (state, action) => {};

const SummaryPage = (props) => {
  const textFilterRef = useRef();
  const modFilterRef = useRef();
  const filteredMods = MODULES_ALL_IN_NUS.filter(
    (mod) => mod.taken === "current" || mod.taken === "over"
  );
  const mods_display = [];
  for (let i = 0; i < filteredMods.length; i++) {
    mods_display.push({
      label: filteredMods[i].module_code + " " + filteredMods[i].module_name,
      value: filteredMods[i].module_code + " " + filteredMods[i].module_name,
    });
  }

  const [currFilterState, dispatchFilter] = useReducer(filterReducer, {
    text_filter: "",
    taken_filter: "All Modules in NUS",
    modules: MODULES_ALL_IN_NUS,
  });

  const [selectedOptions, setSelectedOptions] = useState([]);
  const changeModFilterHandler = (options) => {
    setSelectedOptions((prevState) => {
      return options;
    });
    console.log(options);
  };

  const changeFilterHandler = () => {
    console.log(textFilterRef.current.value);
    console.log(selectedOptions);
  };

  return (
    <Container>
      {/* Title */}
      <Row className={`${classes.title} pt-2`}>Summary</Row>

      <hr className={classes["solid-divider"]}></hr>

      {/* Filter Options */}
      <Row>
        <Col>
          <Form.Control
            placeholder="Search by keyword or module..."
            onChange={changeFilterHandler}
            ref={textFilterRef}
          />
        </Col>
        <Col xs={3}>
          <Select
            options={mods_display}
            isMulti={true}
            value={selectedOptions}
            onChange={changeModFilterHandler}
          />{" "}
        </Col>
      </Row>

      {/* Display Cards */}
      <SummaryCardGroup />
    </Container>
  );
};

export default SummaryPage;
