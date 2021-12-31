import DocumentEditor from "./components/DocumentEditor/DocumentEditor";
import NavbarInternal from "./components/UI/Navbar/Navbar";
import OverlayMain from "./components/OverlayMain/OverlayMain";
import NavbarOverlay from "./components/NavbarOverlay/NavbarOverlay";

import TodoPage from "./components/Pages/TodoPage/TodoPage";
import ViewFilePage from "./components/Pages/ViewFilePage/ViewFile";
import CommunityPage from "./components/Pages/CommunityPage/CommunityPage";
import CalendarPage from "./components/Pages/CalendarPage/CalendarPage";
import ModulePage from "./components/Pages/ModulesPage/ModulePage";
import SettingsPage from "./components/Pages/SettingsPage/SettingsPage";

import { React, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  // Create overlay handler

  const [overlayActive, setOverlayActive] = useState(false);
  const [NavbarActive, setNavbarActive] = useState(false);
  const [overlayPage, setOverlayPage] = useState(<TodoPage />);
  const [ModuleActive, setModuleActive] = useState("none");

  const openPageHandler = (page) => {
    let inputPage = page;
    switch (inputPage) {
      case "To-Do":
        setOverlayPage(<TodoPage />);
        break;
      case "Files":
        console.log("Rendering file explorer");
        setOverlayPage(<ViewFilePage currModule={ModuleActive} onModuleActive={setModuleActive}/>);
        break;
      case "Community":
        setOverlayPage(<CommunityPage />);
        break;
      case "Calendar":
        setOverlayPage(<CalendarPage />);
        break;
      case "Modules":
        setOverlayPage(<ModulePage />);
        break;
      case "Settings":
        setOverlayPage(<SettingsPage />);
        break;
      default:
        console.log("Missing page!");
    }
  };
  const closeOverlayHandler = () => {
    console.log("closing overlay");
    setOverlayActive(false);
  };

  const openOverlayHandler = () => {
    console.log("opening overlay");
    setOverlayActive(true);
  };

  const closeNavbarHandler = () => {
    setNavbarActive(false);
  };

  const openNavbarHandler = () => {
    setNavbarActive(true);
  };

  return (
    <Container fluid className="vh-100" style={{ overflow: "scroll" }}>
      <Row>
        <Col className="col-2">
          {NavbarActive ? (
            <NavbarOverlay
              onOpenPage={openPageHandler}
              onCloseNavbar={closeNavbarHandler}
              onCloseOverlay={closeOverlayHandler}
            />
          ) : (
            <NavbarInternal
              onOpenNavbar={openNavbarHandler}
              onOpenOverlay={openOverlayHandler}
            />
          )}
        </Col>
        <Col>
          {overlayActive ? (
            <OverlayMain onOverlayPage={overlayPage} currModule={ModuleActive}/>
          ) : (
            <DocumentEditor />
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
