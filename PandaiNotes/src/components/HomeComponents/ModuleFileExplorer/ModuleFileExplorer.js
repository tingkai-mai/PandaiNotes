import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";

import ModuleCard from "../../UI/ModuleCard/ModuleCard";
import { MODULES } from "../../../db/SAMPLE_MODULES_CURRENT_DB";
import $ from "jquery";
import classes from "./ModuleFileExplorer.module.css"

const ModuleFileExplorer = (props) => {
  const viewFileHandler = (evt) => {
    props.onChangeModule(evt.target.id);
  };

  useEffect(() => {
    var getthevalue = $(props).attr("id");
    $(".card").on("click", viewFileHandler);

    return () => {
      console.log(getthevalue);
      $(".card").off("click", viewFileHandler);
    };
  }, []);

  return (
    <Container>
      <Row>
        {MODULES.map((module) => {
          return (
            <ModuleCard
              id={module.module_code}
              key={module.module_code}
              mod_code={module.module_code}
              mod_name={module.module_name}
            />
          );
        })}
      </Row>
    </Container>
  );
};

export default ModuleFileExplorer;
