import classes from "./SummaryPage.module.scss";
import { Container, Row, Col, Form } from "react-bootstrap";
import { MODULES_ALL_IN_NUS } from "../../../db/SAMPLE_MODULES_MASTER";
import React, { useState, useReducer, useRef } from "react";
import { MultiSelect } from "react-multi-select-component";
import SummaryCardGroup from "./SummaryCardGroup";
import SAMPLE_SUMMARY_JSON from "../../../db/SAMPLE_SUMMARY_JSON";

const filterReducer = (state, action) => {
  const mods_filter = action.val.modules;
  const text_filter = action.val.text_filter;
  const chosen_tags = action.val.chosen_tags;

  // Filter out the notes by the modules first.
  // Then, grab all the tags in the notes that belong to the specified modules.
  // Arrange them into difficult, important, and revision on line 20
  let tags_filtered_by_mods = { difficult: [], important: [], revision: [] };
  let filtered_notes = SAMPLE_SUMMARY_JSON.filter((note) =>
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

  // Then filter each tag by keyword
  const regexp = new RegExp(text_filter, "i");
  for (let [tagType, tagContents] of Object.entries(tags_filtered_by_mods)) {
    let res = tagContents.filter((content) => {
      // console.log(content.html);
      return regexp.test(content.html);
    });
    tags_filtered_by_mods[tagType] = res;
  }
  return {
    text_filter: text_filter,
    modules: mods_filter,
    tag_content: tags_filtered_by_mods,
    chosen_tags: chosen_tags,
  };
};

const SummaryPage = (props) => {
  const textFilterRef = useRef();
  // Grab only modules that have been taken before
  const filteredMods = MODULES_ALL_IN_NUS.filter(
    (mod) => mod.taken === "current" || mod.taken === "over"
  );
  // Populate array for display of modules
  const mods_display = [];
  for (let i = 0; i < filteredMods.length; i++) {
    mods_display.push({
      label: filteredMods[i].module_code + " " + filteredMods[i].module_name,
      value: filteredMods[i].module_code + " " + filteredMods[i].module_name,
    });
  }
  const tags_display = [
    { label: "Difficult", value: "Difficult" },
    { label: "Important", value: "Important" },
    { label: "For Revision", value: "For Revision" },
  ];

  const [currFilterState, dispatchFilter] = useReducer(filterReducer, {
    text_filter: "",
    modules: [],
    tag_content: { difficult: [], important: [], revision: [] },
    chosen_tags: [],
  });

  // Use Object as state to allow for more accurate state updating
  const [selectedMods, setSelectedMods] = useState(mods_display);
  const [selectedTags, setSelectedTags] = useState(tags_display);

  // To display initial message
  const [dirty, setDirty] = useState(false);

  /* Handlers to handle change of module/tags/text filters */
  const changeModFilterHandler = (evt) => {
    setDirty(true);
    const updatedMods = evt;
    setSelectedMods(evt);
    dispatchFilter({
      type: "FILTER",
      val: {
        chosen_tags: selectedTags,
        text_filter: textFilterRef.current.value,
        modules: updatedMods.map((mod) => {
          return mod.value;
        }),
      },
    });
  };

  const changeTagsFilterHandler = (evt) => {
    setDirty(true);
    const updatedTags = evt;
    setSelectedTags(evt);
    dispatchFilter({
      type: "FILTER",
      val: {
        chosen_tags: updatedTags,
        text_filter: textFilterRef.current.value,
        modules: selectedMods.map((mod) => {
          return mod.value;
        }),
      },
    });
  };

  const changeTextFilterHandler = () => {
    setDirty(true);
    dispatchFilter({
      type: "FILTER",
      val: {
        chosen_tags: selectedTags,
        text_filter: textFilterRef.current.value,
        modules: selectedMods.map((mod) => mod.value),
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
            placeholder="Search by keyword..."
            onChange={changeTextFilterHandler}
            ref={textFilterRef}
          />
        </Col>
        <Col xs={2}>
          {" "}
          <MultiSelect
            options={mods_display}
            value={selectedMods}
            onChange={changeModFilterHandler}
            labelledBy="Select"
          />
        </Col>
        <Col xs={2}>
          <MultiSelect
            options={tags_display}
            value={selectedTags}
            onChange={changeTagsFilterHandler}
            labelledBy="Select"
          />
        </Col>
      </Row>

      {/* Display Cards */}
      {/* {<div>{JSON.stringify(selectedMods)}</div>} */}
      {dirty ? (
        <SummaryCardGroup
          tagContent={currFilterState.tag_content}
          chosenTags={currFilterState.chosen_tags.map((tag) => tag.value)}
        />
      ) : (
        <div className={`${classes["placeholder"]} p-3`}>Enter a filter...</div>
      )}
    </Container>
  );
};

export default SummaryPage;
