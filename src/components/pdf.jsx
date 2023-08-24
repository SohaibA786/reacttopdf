import './pdf.css';
import Disclaimer from './disclaimer';
import TableofContent from './tableOfContents';
import TitlePage from './titlePage';
import ProjectOverview from './projectOverview';
import ModuleConfig from './moduleConfig';
import DiagramView from './diagramView';

import { PDFExport } from '@progress/kendo-react-pdf';

import React, { useRef } from 'react';
// import ReactToPrint from 'react-to-print';



// import html2canvas from 'html2canvas';
// import { jsPDF } from 'jspdf';


// import html2pdf from 'html2pdf.js';
// import JsPDF from 'jspdf';



// Write a code to export as pdf
// <TitlePage />
// <TableofContent />
// <Disclaimer />
// <ProjectOverview />
// <ModuleConfig />
// <DiagramView />

const Pdf = () => {
    const pdfExportComponent = React.useRef(null);
    const exportPDFWithComponent = () => {
        if (pdfExportComponent.current) {
            pdfExportComponent.current.save();
        }
    };
    // const componentRef = useRef();

    // const printRef = React.useRef();

    // const handleDownloadPdf = async () => {
    //     const element = printRef.current;
    //     const canvas = await html2canvas(element);
    //     const data = canvas.toDataURL('image/png');

    //     const pdf = new jsPDF();
    //     const imgProperties = pdf.getImageProperties(data);
    //     const pdfWidth = pdf.internal.pageSize.getWidth();
    //     const pdfHeight =
    //       (imgProperties.height * pdfWidth) / imgProperties.width;

    //     pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    //     pdf.save('print.pdf');
    //   };


    return (
        // <div className="pdf-body">
        //     <TitlePage />
        //     <TableofContent />
        //     <Disclaimer />
        //     <ProjectOverview />
        //     <ModuleConfig />
        //     <DiagramView />
        // </div>

        // <>
        //     <ReactToPrint
        //         documentTitle="Base Report"
        //         trigger={() => <button>Print this out!</button>}
        //         content={() => componentRef.current}
        //         // I want to set the page size to A4, portrait with 0 margins and 133 scale with including background graphics
        //         pageStyle="@page { size: A4 portrait; margin: 0; } @media print { body { -webkit-print-color-adjust: exact; } }"

        //     />
        //     <div ref={componentRef} id="report" >

        //         <TitlePage/>
        //         <TableofContent />
        //         <Disclaimer />
        //         <ProjectOverview />
        //         <ModuleConfig />
        //         <DiagramView />
        //         {/* Your React components */}
        //     </div>

        //     {/* <button onClick={generatePDF} type="button">Export PDF</button> */}
        //     {/* <button onClick={exportToPDF}>Export to PDF</button> */}
        // </>
        <>
            <button onClick={()=>{
                console.log('clicked');
                setTimeout(exportPDFWithComponent, 5000);
            }}>Export PDF</button>
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
