import './pdf.css';
import Disclaimer from './disclaimer';
import TableofContent from './tableOfContents';
import TitlePage from './titlePage';
import ProjectOverview from './projectOverview';
import ModuleConfig from './moduleConfig';
import DiagramView from './diagramView';

import { PDFExport } from '@progress/kendo-react-pdf';

import React, { useRef } from 'react';


const Pdf = () => {
    const pdfExportComponent = React.useRef(null);
    const exportPDFWithComponent = () => {
        if (pdfExportComponent.current) {
            pdfExportComponent.current.save();
        }
    };

    return (
        <>
            <button onClick={exportPDFWithComponent}>Export PDF</button>
            <PDFExport
                ref={pdfExportComponent}
                paperSize="A4"
                margin={2}
                fileName={`Report ${new Date().getFullYear()}`}
            >
                <TitlePage />
                <TableofContent />
                <Disclaimer />
                <ProjectOverview />
                <ModuleConfig />
                <DiagramView />
            </PDFExport>

        </>

    );
}




export default Pdf;
