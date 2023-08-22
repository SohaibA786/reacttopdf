import './pdf.css';
import Disclaimer from './disclaimer';
import TableofContent from './tableOfContents';
import TitlePage from './titlePage';
import ProjectOverview from './projectOverview';
import ModuleConfig from './moduleConfig';
import DiagramView from './diagramView';


const Pdf = () => {
    return (
        <div className="pdf-body">
            <TitlePage />
            <TableofContent />
            <Disclaimer />
            <ProjectOverview />
            <ModuleConfig />
            <DiagramView />
        </div>
    );
}

export default Pdf;