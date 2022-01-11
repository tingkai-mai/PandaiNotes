import { React, useReducer, useRef } from "react";
import classes from "./CommunityPage.module.scss";
import ModuleSection from "./ModuleSection";
import { MODULES_ALL_IN_NUS } from "../../../db/SAMPLE_MODULES_MASTER";
import {
  Container,
  Row,
  InputGroup,
  FormControl,
  Form,
} from "react-bootstrap";

const filterReducer = (state, action) => {
  console.log(action);
  let filtered = action.val.modules;
  let text_filter = action.val.text_filter;
  let taken_filter = action.val.taken_filter;
  // Filter by taken_filter
  if (taken_filter === "Current Modules Enrolled") {
    filtered = filtered.filter((mod) => {
      return mod.taken === "current";
    });
  } else if (taken_filter === "All Modules Enrolled") {
    filtered = filtered.filter((mod) => {
      return mod.taken === "current" || mod.taken === "over";
    });
  } else if (taken_filter === "Never Enrolled") {
    filtered = filtered.filter((mod) => {
      return mod.taken === "never";
    });
  }

  // Filter by text_filter
  const regexp = new RegExp(text_filter, "i");
  filtered = filtered.filter((mod) => {
    const full_name = mod.module_code + " " + mod.module_name;
    return regexp.test(full_name);
  });
  console.log(filtered);
  return {
    text_filter: text_filter,
    taken_filter: taken_filter,
    modules: filtered,
  };
};

function CommunityPage(props) {
  const [currFilterState, dispatchFilter] = useReducer(filterReducer, {
    text_filter: "",
    taken_filter: "All Modules in NUS",
    modules: MODULES_ALL_IN_NUS,
  });

  const textFilterRef = useRef();
  const takenFilterRef = useRef();

  const changeFilterHandler = (evt) => {
    // console.log("filter changed");
    // console.log(textFilterRef.current.value);
    // console.log(takenFilterRef.current.value);
    dispatchFilter({
      type: "FILTER",
      val: {
        text_filter: textFilterRef.current.value,
        taken_filter: takenFilterRef.current.value,
        modules: MODULES_ALL_IN_NUS,
      },
    });
  };

  return (
    <Container className={classes.overflow}>
      <Row id={classes.title}>Community</Row>
      <hr className={classes["solid-divider"]} />

      <Row>
        <InputGroup>
          <FormControl
            placeholder="Filter Modules..."
            onChange={changeFilterHandler}
            ref={textFilterRef}
          ></FormControl>
          <Form.Select
            size="lg"
            onChange={changeFilterHandler}
            ref={takenFilterRef}
          >
            <option>All Modules in NUS</option>
            <option>Current Modules Enrolled</option>
            <option>All Modules Enrolled</option>
            <option>Never Enrolled</option>
          </Form.Select>
        </InputGroup>
      </Row>

      <Row>
        <div className={classes["subheader"]}>
          {String(currFilterState.taken_filter)}
        </div>
        <hr className={classes["solid-divider"]} />
        {currFilterState.modules.map((module) => {
          return <ModuleSection key={module.module_code} module={module} />;
        })}
      </Row>

      {/* <Row className="pt-2">
        <div className={classes["subheader"]}>All Modules</div>
        <hr className={classes["solid-divider"]} />
        {MODULES_ALL.map((module) => {
          return <ModuleSection module={module} />;
        })}
      </Row> */}
    </Container>
  );
}

export default CommunityPage;
