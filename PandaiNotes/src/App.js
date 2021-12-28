import DocumentEditor from "./components/DocumentEditor/DocumentEditor";
import NavbarInternal from "./components/UI/Navbar/Navbar";
import OverlayMain from "./components/OverlayMain/OverlayMain";
import NavbarOverlay from "./components/NavbarOverlay/NavbarOverlay";

import TodoPage from "./components/Pages/TodoPage/TodoPage";
import FileExplorerPage from "./components/Pages/FileExplorerPage/FileExplorerPage";
import CommunityPage from "./components/Pages/CommunityPage/CommunityPage";
import CalendarPage from "./components/Pages/CalendarPage/CalendarPage";
import ModulePage from "./components/Pages/ModulesPage/ModulePage";
import SettingsPage from "./components/Pages/SettingsPage/SettingsPage";

import { React, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  // Create overlay handler

  const [overlayActive, setOverlayActive] = useState(true);
  const [NavbarActive, setNavbarActive] = useState(false);
  const [overlayPage, setOverlayPage] = useState(<TodoPage />);

  const closeOverlayHandler = () => {
    console.log("closing overlay");
    setOverlayActive(false);
  }

  const openOverlayHandler = () => {
    console.log("opening overlay");
    setOverlayActive(true);
  }

  const closeNavbarHandler = () => {
    setNavbarActive(false);
  }

  const openNavbarHandler = () => {
    setNavbarActive(true);
  }

  const openTodoPage = () => {
    setOverlayPage(<TodoPage />);
  }

  const openFileExplorerPage = () => {
    setOverlayPage(<FileExplorerPage />);
  }

  const openCommunityPage = () => {
    setOverlayPage(<CommunityPage />);
  }

  const openCalendarPage = () => {
    setOverlayPage(<CalendarPage />);
  }

  const openModulePage = () => {
    setOverlayPage(<ModulePage />);
  }

  const openSettingsPage = () => {
    setOverlayPage(<SettingsPage />);
  }

  return (
    <Container fluid className="vh-100">
      <Row>
        <Col className="col-2">
          {NavbarActive 
            ? <NavbarOverlay 
                onCloseNavbar={closeNavbarHandler} 
                onCloseOverlay={closeOverlayHandler} 
                onTodoPage={openTodoPage}
                onFileExplorerPage={openFileExplorerPage}
                onCommunityPage={openCommunityPage}
                onCalendarPage={openCalendarPage}
                onModulePage={openModulePage}
                onSettingsPage={openSettingsPage}/>
            : <NavbarInternal onOpenNavbar={openNavbarHandler} onOpenOverlay={openOverlayHandler}/>}
        </Col>
        <Col>{overlayActive ? <OverlayMain onOverlayPage={overlayPage}/> : <DocumentEditor />}</Col>
      </Row>
    </Container>
  );
}

export default App;
