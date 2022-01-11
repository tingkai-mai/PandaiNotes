import classes from "./SummaryPage.module.scss";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { MODULES_ALL_IN_NUS } from "../../../db/SAMPLE_MODULES_MASTER";
import React, { useState, useReducer, useRef } from "react";
import { MultiSelect } from "react-multi-select-component";
import SummaryCardGroup from "./SummaryCardGroup";
// import * as NOTES from "../../../db/SAMPLE_NOTES_DB.json";
import SAMPLE_NOTES_JSON from "../../../db/SAMPLE_NOTES_JSON";

const filterReducer = (state, action) => {
  // console.log(action);
  // console.log(SAMPLE_NOTES_JSON);
  const mods_filter = action.val.modules;
  const text_filter = action.val.text_filter;
  // console.log(mods_filter);

  // Filter out the notes by the modules first.
  // Then, grab all the tags in the notes that belong to the specified modules.
  // Arrange them into difficult, important, and revision on line 20
  let tags_filtered_by_mods = { difficult: [], important: [], revision: [] };
  let filtered_notes = SAMPLE_NOTES_JSON.filter((note) =>
    mods_filter.includes(note.module)
  );
  filtered_notes.map((note) => {
    for (let [key, value] of Object.entries(note.difficult)) {
      tags_filtered_by_mods.difficult.push({
        noteID: note.id,
        tagID: key,
        module: note.module,
        comment: value.comment,
        html: value.html,
      });
    }
    for (let [key, value] of Object.entries(note.important)) {
      tags_filtered_by_mods.important.push({
        noteID: note.id,
        tagID: key,
        module: note.module,
        comment: value.comment,
        html: value.html,
      });
    }
    for (let [key, value] of Object.entries(note.revision)) {
      tags_filtered_by_mods.revision.push({
        noteID: note.id,
        tagID: key,
        module: note.module,
        comment: value.comment,
        html: value.html,
      });
    }
  });
  // console.log(tags_filtered_by_mods);

  // Then filter each tag by keyword
  const regexp = new RegExp(text_filter, "i");
  for (let [tagType, tagContents] of Object.entries(tags_filtered_by_mods)) {
    let res = tagContents.filter((content) => {
      // console.log(content.html);
      return regexp.test(content.html);
    });
    tags_filtered_by_mods[tagType] = res;
  }
  // console.log(tags_filtered_by_mods);
  return {
    text_filter: text_filter,
    modules: mods_filter,
    tags: tags_filtered_by_mods,
  };
};

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
    modules: [],
    tags: { difficult: [], important: [], revision: [] },
  });

  // BUG WITH SELECTION - For now, just set manually set selected modules
  const [selected, setSelected] = useState([]);
  const changeModFilterHandler = (evt) => {
    setSelected((prevState) => {
      return evt;
    });
    console.log(selected);
  };

  const changeFilterHandler = () => {
    const SELECTED_MODULES = [
      "MA1521 Calculus for Computing",
      "CS1101S Programming Methodology",
    ];
    dispatchFilter({
      type: "FILTER",
      val: {
        text_filter: textFilterRef.current.value,
        modules: SELECTED_MODULES,
      },
    });
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
          {" "}
          <MultiSelect
            options={mods_display}
            value={selected}
            onChange={changeModFilterHandler}
            labelledBy="Select"
          />
        </Col>
      </Row>

      {/* Display Cards */}
      {/* <div>{JSON.stringify(currFilterState.tags)}</div> */}
      {<div>{JSON.stringify(selected)}</div>}
      <SummaryCardGroup tags={currFilterState.tags} />
    </Container>
  );
};

export default SummaryPage;
