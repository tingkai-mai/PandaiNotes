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
import classes from "./App.module.scss";

function App() {
  // Create overlay handler

  const [overlayActive, setOverlayActive] = useState(true); // Changed
  const [NavbarActive, setNavbarActive] = useState(false);
  const [overlayPage, setOverlayPage] = useState(<CommunityPage />); // Changed

  const openPageHandler = (page) => {
    let inputPage = page;
    switch (inputPage) {
      case "To-Do":
        setOverlayPage(<TodoPage />);
        break;
      case "Files":
        setOverlayPage(<ViewFilePage />);
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
    <Container fluid className="vh-100">
      <Row>
        <Col className="col-2">
          {/* Handle Navbar */}
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

        {/* Handle viewport's page */}
        <Col className={classes["overflow"]}>
          {overlayActive ? (
            <OverlayMain onOverlayPage={overlayPage} />
          ) : (
            <DocumentEditor />
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
