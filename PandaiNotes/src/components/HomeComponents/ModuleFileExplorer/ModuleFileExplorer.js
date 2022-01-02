import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";

import ModuleCard from "../../UI/ModuleCard/ModuleCard";
import { MODULES } from "../../../db/SAMPLE_MODULES_CURRENT_DB";
import $ from "jquery";

const ModuleFilesExplorer = (props) => {
  const viewFileHandler = (evt) => {
    console.log("Clicked");
  };

  useEffect(() => {
    $(".card").on("click", viewFileHandler);

    return () => {
      $(".card").off("click", viewFileHandler);
    };
  }, []);

  return (
    <Container>
      <Row>
        {MODULES.map((module) => {
          return (
            <ModuleCard
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

export default ModuleFilesExplorer;
