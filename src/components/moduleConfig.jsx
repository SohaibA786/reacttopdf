import './moduleConfig.css';
import Header from './subComponents/header';
import Footer from './subComponents/footer';

const ModuleConfig = () => {
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
        {
            title: 'Author',
            value: 'Aditya Garimella',
        },
        {
            title: 'Author',
            value: 'Aditya Garimella',
        },
    ]

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

    return (
        <div id='module-config' className='module-config'>
            {/* Patterns */}
            <img className='pattern-1' src='./Assets/pattern.svg' alt='pattern' />
            <img className='pattern-2' src='./Assets/pattern.svg' alt='pattern' />
            {/* Header */}
            <Header />
            {/* Main Body */}
            <main className='mc-body'>
                <p>Module Configuration</p>
                <div className='data-tables'>
                    {/* PV Panel */}
                    {tableRender(moduleConfiguration)}
                </div>
                <img className='img' src='./Assets/maps.png' alt='map' />
            </main>

            {/* Footer */}
            <Footer pageNo="3/10" />
        </div>
    );
};

export default ModuleConfig;