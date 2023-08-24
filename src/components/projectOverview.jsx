import './projectOverview.css';
import Header from './subComponents/header';
import Footer from './subComponents/footer';
// import Patterns from './subComponents/patterns';

const ProjectOverview = () => {
    let projectInfo = [
        {
            title: 'Project Name',
            value: 'A19 South Exelby',
        },
        {
            title: 'Address',
            value: 'A19 Southbound, Ingleby Arncliffe, Northallerton DL6 3LG, UK',
        },
        {
            title: 'Ground elevation',
            value: '76.94m',
        },
        {
            title: 'Author',
            value: 'Aditya Garimella',
        },
    ]

    let customerInfo = [
        {
            title: 'Customer’s Address',
            value: 'A19 Southbound, Ingleby Arncliffe, Northallerton DL6 3LG, UK',
        },
        {
            title: 'Ground elevation',
            value: 'A19 Southbound, Ingleby Arncliffe, Northallerton DL6 3LG, UK',
        },
        {
            title: 'Ground elevation',
            value: 'A19 Southbound, Ingleby Arncliffe, Northallerton DL6 3LG, UK',
        },
        {
            title: 'Ground elevation',
            value: 'A19 Southbound, Ingleby Arncliffe, Northallerton DL6 3LG, UK',
        },
    ]

    let pvPanel = [
        {
            title: 'Number of PV modules',
            value: '104.5kWp',
        },
        {
            title: 'Number of PV modules',
            value: '104.5kWp',
        },
        {
            title: 'Number of PV modules',
            value: '104.5kWp',
        },
    ]
    let solarStructure = [
        {
            title: 'Number of Mounting structures',
            value: '100kW',
        },
        {
            title: 'Number of PV modules',
            value: '104.5kWp',
        },
        {
            title: 'Number of PV modules',
            value: '104.5kWp',
        },
    ]
    let inverter = [
        {
            title: 'Number of PV modules',
            value: '104.5kWp',
        },
        {
            title: 'Number of PV modules',
            value: '104.5kWp',
        },
        {
            title: 'Number of PV modules',
            value: '104.5kWp',
        },
    ]
    let environmentalBenifits = [
        {
            title: 'Number of PV modules',
            value: '104.5kWp',
        },
        {
            title: 'Number of PV modules',
            value: '104.5kWp',
        },
        {
            title: 'Number of PV modules',
            value: '104.5kWp',
        },
    ]

    function tableRender(title, tableData) {
        return (
            <div className='render-function'>
                <p>{title}</p>
                <table className='render-table'>
                    <thead>
                        <tr>
                            <td>Property</td>
                            <td>Value</td>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((item, index) => {
                            return (
                                <tr key={index} className={index % 2 == 0 ? 'one' : 'two'}>
                                    <td className='left'>{item.title}</td>
                                    <td className='right'>{item.value}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }

    return (
        <div  id='project-overview' className='project-overview'>
            {/* Patterns */}
            {/* <Patterns /> */}
            {/* Patterns */}
            <img className='pat1' src='./Assets/pattern.png' alt='pattern' />
            <img className='pat2' src='./Assets/pattern.png' alt='pattern' />
            {/* <img className='pattern-1' src='./Assets/pattern.svg' alt='pattern' />
            <img className='pattern-2' src='./Assets/pattern.svg' alt='pattern' /> */}
            {/* Header */}
            <Header />
            {/* Main Body */}
            <main className='po-body'>
                <p>Project Overview</p>
                {/* Project Info */}
                <div className='info'>
                    <p>Project Information</p>
                    <table className='table'>
                        <tbody>
                            {projectInfo.map((item, index) => {
                                return (
                                    <tr key={index} className='project-info-table-row'>
                                        <td className='left'>{item.title}</td>
                                        <td className='right'>{item.value}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                {/* Customer Info */}
                <div className='info'>
                    <p>Customer Information</p>
                    <table className='table'>
                        <tbody>
                            {customerInfo.map((item, index) => {
                                return (
                                    <tr key={index} className='project-info-table-row'>
                                        <td className='left'>{item.title}</td>
                                        <td className='right'>{item.value}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className='data-tables'>
                    {/* PV Panel */}
                    {tableRender("PV Panel", pvPanel)}
                    {/* PV Panel */}
                    {tableRender("Solar Structure", solarStructure)}
                    {/* PV Panel */}
                    {tableRender("Inverter", inverter)}
                    {/* PV Panel */}
                    {tableRender("Environmental Benefits", environmentalBenifits)}
                </div>
            </main>

            {/* Footer */}
            <Footer pageNo="3/10" />
        </div>
    );
};

export default ProjectOverview;