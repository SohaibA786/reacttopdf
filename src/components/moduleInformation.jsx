import './moduleInformation.css';
import Header from './subComponents/header';
import Footer from './subComponents/footer';
import Patterns from './subComponents/patterns';

function tableRender(tableData) {
    return (
        <div className='render-function'>
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


const ModuleInformation = () => {

    let moduleConfiguration = [
        {
            title: 'Installation roof type',
            value: 'A19 South Exelby',
        },
        {
            title: 'Address',
            value: 'DL6 3LG, UK',
        },
        {
            title: 'Ground elevation',
            value: '76.94m',
        },
        {
            title: 'Author',
            value: 'Aditya Garimella',
        },
        {
            title: 'Author',
            value: 'Aditya Garimella',
        },
    ]

    let percantages = [90, 10];

    return (
        <div id='module-information' className='module-information'>
            {/* Patterns */}
            <Patterns />
            {/* Header */}
            <Header />
            {/* Main Body */}
            <main className='mi-body'>
                <p>Module Information</p>
                <div className='data-tables'>
                    {/* PV Panel */}
                    {tableRender(moduleConfiguration)}
                </div>
            </main>

            {/* Footer */}
            <Footer pageNo="3/10" />
        </div>
    );
};

export default ModuleInformation;