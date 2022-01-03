import React from 'react'
import { Container, Row } from "react-bootstrap";
import ModuleFilesExplorer from '../ModuleFileExplorer/ModuleFileExplorer';


const ExportFile = (props) => {
    return (
        <Container>
            <ModuleFilesExplorer headerName={"Export"} />
        </Container>
    )
}

export default ExportFile
