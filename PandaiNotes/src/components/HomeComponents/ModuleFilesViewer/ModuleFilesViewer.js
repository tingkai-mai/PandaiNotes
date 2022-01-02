import React from "react";
import { Container, Row } from "react-bootstrap";

import ModuleCard from "../../UI/ModuleCard/ModuleCard";
import { MODULES } from "../../../db/SAMPLE_MODULES_CURRENT_DB";
import ModulePageMain from "../../ModulePageMain/ModulePageMain";

const ModuleFilesViewer = (props) => {
  return (
    <Container>
      {props.test}

      <Row>
        {MODULES.map((val, key) => {
          return (
            <ModuleCard
              mod_code={val.module_code}
              mod_name={val.module_name}
              onClick={() => {
                props.changeModule("CS1101S");
              }}
            />
          );
        })}
        ;
      </Row>
    </Container>
  );
};

export default ModuleFilesViewer;
