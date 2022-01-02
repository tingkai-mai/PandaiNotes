import React from "react";
import { Container, Row } from "react-bootstrap";

import ModuleCard from "../../UI/ModuleCard/ModuleCard";
import { MODULES } from "../../../db/SAMPLE_MODULES_CURRENT_DB";
import ModulePageMain from "../../ModulePageMain/ModulePageMain";

const ModuleFilesViewer = (props) => {
  return "Module files viewer";
};

export default ModuleFilesViewer;

// const ModuleFilesViewer = (props) => {
//   return (
//     <Container>
//       {props.test}

//       <Row>
//         {MODULES.map((module) => {
//           return (
//             <ModuleCard
//               key={module.module_code}
//               mod_code={module.module_code}
//               mod_name={module.module_name}
//               onClick={() => {
//                 props.changeModule("CS1101S");
//               }}
//             />
//           );
//         })}
//       </Row>
//     </Container>
//   );
// };

// export default ModuleFilesViewer;
