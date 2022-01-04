import DocumentEditor from "./components/DocumentEditor/DocumentEditor";
import NavbarInternal from "./components/UI/Navbar/Navbar";
import OverlayMain from "./components/OverlayMain/OverlayMain";
import NavbarOverlay from "./components/NavbarOverlay/NavbarOverlay";

import TodoPage from "./components/Pages/TodoPage/TodoPage";
import ViewFilePage from "./components/Pages/ViewFilePage/ViewFilePage";
import CommunityPage from "./components/Pages/CommunityPage/CommunityPage";
import CalendarPage from "./components/Pages/CalendarPage/CalendarPage";
import ModulePage from "./components/Pages/ModulesPage/ModulePage";
import SettingsPage from "./components/Pages/SettingsPage/SettingsPage";
import NavbarManager from "./components/HomeComponents/NavbarManager/NavbarManager";

import ExportFilePage from "./components/Pages/ExportFilePage/ExportFilePage";
import OpenFilePage from "./components/Pages/OpenFilePage/OpenFilePage";
import SaveFilePage from "./components/Pages/SaveFilePage/SaveFilePage";

// Marked for removal
import SummaryPage from "./components/Pages/SummaryPage/SummaryPage";

import { React, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./App.module.scss";

function App() {
  // Create overlay handler

  const [overlayActive, setOverlayActive] = useState(false); // Changed
  const [NavbarActive, setNavbarActive] = useState(false);
  const [overlayPage, setOverlayPage] = useState(<SummaryPage />); // Changed
  const [overlayInternalActive, setInternalActive] = useState(false);
  const [currPage, setCurrPage] = useState(<ExportFilePage />);

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

  const openCurrHandler = (page) => {
    let inputPage = page;
    switch (inputPage) {
      case "Open":
        setCurrPage(<OpenFilePage />);
        break;
      case "Save":
        setCurrPage(<SaveFilePage />);
        break;
      case "Export":
        setCurrPage(<ExportFilePage />);
        break;
      case "Settings":
        setCurrPage(<SettingsPage />);
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

  const openInternalHandler = () => {
    setInternalActive(true);
  };

  const closeInternalHandler = () => {
    setInternalActive(false);
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
              onOpenInternalOverlay={openInternalHandler}
              onCloseInternalOverlay={closeInternalHandler}
              onChangeCurrPage={openCurrHandler}
            />
          )}
        </Col>

        {/* Handle viewport's page */}
        <Col className={classes["overflow"]}>
          {overlayActive ? (
            <OverlayMain onOverlayPage={overlayPage} />
          ) : overlayInternalActive ? (
            <NavbarManager
              onCurrPage={currPage}
              changeCurrPage={openCurrHandler}
            />
          ) : (
            <DocumentEditor />
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
