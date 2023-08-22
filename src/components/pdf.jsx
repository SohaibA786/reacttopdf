import './pdf.css';
import Disclaimer from './disclaimer';
import TableofContent from './tableOfContents';
import TitlePage from './titlePage';
import ProjectOverview from './projectOverview';


const Pdf = () => {
    return (
        <div className="pdf-body">
            {/* <TitlePage />
            <TableofContent />
            <Disclaimer /> */}
            <ProjectOverview />
        </div>
    );
}

export default Pdf;