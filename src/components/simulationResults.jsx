import './simulationResults.css';
import Header from './subComponents/header';
import Footer from './subComponents/footer';
import Patterns from './subComponents/patterns';


function tableRender(title, tableData, dataArr) {

    let leftStatKw = dataArr;
    // Left Stat KW Values
    // Calculating Percentages
    let percentages = [100, 100 * leftStatKw[1] / leftStatKw[0], 100 * leftStatKw[2] / leftStatKw[0]];
    // let percentages = [100, 87.73, 20.27];
    console.log("percentages", percentages);
    let strokeWidth = 12;
    let radii = [54, 42, 30];
    let [cx, cy] = [60, 60];
    let circumferences = radii.map(val => val * 2 * Math.PI);

    let strokeLength = circumferences.map((cir, index) => cir * percentages[index] / 100);


    return (
        <div className='render-function'>
            <p>{title}</p>
            <div className='line' />
            <div className='simulation-result'>
                <table className='render-table'>
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
                <div className='stat-graph'>
                    {/* Stat Graph */}
                    <div className='graph'>
                        <svg height="120" width="120">
                            <circle cx={cx} cy={cy}
                                r={radii[0]} fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth={strokeWidth - 3} strokeLinecap="round"
                            />
                            <circle
                                className='' style={{transform: "rotate(-85deg)", transformOrigin: "center"}} cx={cx} cy={cy}
                                r={radii[0]} fill="none" stroke="#27326A" strokeWidth={strokeWidth} strokeLinecap="round"
                                strokeDasharray={`${strokeLength[0]},${circumferences[0]}`}
                            />
                            <circle cx={cx} cy={cy}
                                r={radii[1]} fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth={strokeWidth - 3} strokeLinecap="round"
                            />
                            <circle
                                className='' style={{transform: "rotate(-85deg)", transformOrigin: "center"}} cx={cx} cy={cy}
                                r={radii[1]} fill="none" stroke="#60B8EE" strokeWidth={strokeWidth} strokeLinecap="round"
                                strokeDasharray={`${strokeLength[1]},${circumferences[1]}`}
                            />
                            <circle cx={cx} cy={cy}
                                r={radii[2]} fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth={strokeWidth - 3} strokeLinecap="round"
                            />
                            <circle
                                className='' style={{transform: "rotate(-85deg)", transformOrigin: "center"}} cx={cx} cy={cy}
                                r={radii[2]} fill="none" stroke="#B7DCFF" strokeWidth={strokeWidth} strokeLinecap="round"
                                strokeDasharray={`${strokeLength[2]},${circumferences[2]}`}
                            />
                            {/* <text className="svg-text-up" x="48" y="60">Yield</text>
                        <text className="svg-text-down" x="54" y="70">KW</text> */}
                        </svg>
                        <div className='graph-text'>
                            <span className="svg-text-up">Yield</span>
                            <span className="svg-text-down">KW</span>
                        </div>
                    </div>
                    {/* Stat graph text */}
                    <div className='graph-text-container'>
                        {/* one */}
                        <div className='stat-info'>
                            <svg height="20" width="20">
                                <circle
                                    cx={10} cy={10} r={7.5} fill="none" stroke="#27326A" strokeWidth={5}
                                />
                            </svg>
                            <div className='ball-text'>
                                <span className='value'>
                                    {leftStatKw[0].toFixed(2)}kW</span><br />
                                {/* <div className='down'> */}
                                    <span className='normal'>Total - </span>
                                    <span className='percent'>
                                        {percentages[0].toFixed(2)}%
                                    </span>
                                {/* </div> */}
                            </div>
                        </div>
                        {/* two */}
                        <div className='stat-info'>
                            <svg height="20" width="20">
                                <circle
                                    cx={10} cy={10} r={7.5} fill="none" stroke="#60B8EE" strokeWidth={5}
                                />
                            </svg>
                            {/* <div className='ball color2'></div> */}
                            <div className='ball-text'>
                                <span className='value'>
                                    {leftStatKw[1].toFixed(2)}kW</span><br />
                                <span className='normal'>Consumed  - </span>
                                <span className='percent'>
                                    {percentages[1].toFixed(2)}%</span>
                            </div>
                        </div>
                        {/* three */}
                        <div className='stat-info'>
                            <svg height="20" width="20">
                                <circle
                                    cx={10} cy={10} r={7.5} fill="none" stroke="#B7DCFF" strokeWidth={5}
                                />
                            </svg>
                            {/* <div className='ball color3'></div> */}
                            <div className='ball-text'>
                                <span className='value'>
                                    {leftStatKw[2].toFixed(2)} kW</span><br />
                                <span className='normal'>Fed to Grid - </span>
                                <span className='percent'>
                                    {percentages[2].toFixed(2)}%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='line' />
        </div>
    );
}


const SimulationResults = () => {
    let pvSim = [
        {
            title: 'Own power consumption',
            value: '1,836kWh',
        },
        {
            title: 'Number of PV modules',
            value: '104.5kWp',
        },
        {
            title: 'Number of PV modules',
            value: '',
        },
        {
            title: 'Number of PV modules',
            value: '104.5kWp',
        },
        {
            title: 'Number of PV modules',
            value: '',
        },
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
    let pvSimData = [160.53, 140.84, 19.69];

    let loadSim = [
        {
            title: 'Own power consumption',
            value: '1,836kWh',
        },
        {
            title: 'Consumption through grid',
            value: '104.5kWp',
        },
        {
            title: 'Number of PV modules',
            value: '',
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
    let loadSimData = [160.53, 140.84, 19.69];

    let selfSim = [
        {
            title: 'Own power consumption',
            value: '1,836kWh',
        },
        {
            title: 'Number of PV modules',
            value: '104.5kWp',
        },
        {
            title: 'Number of PV modules',
            value: '',
        },
    ]
    let selfSimData = [160.53, 140.84, 19.69];

    return (
        <div id='simulation-results' className='simulation-results'>
            {/* Patterns */}
            <Patterns />
            {/* Header */}
            <Header />
            {/* Main Body */}
            <main className='sr-body'>
                <p>Simulation Results</p>
                {/* PV System */}
                {tableRender("PV System", pvSim, pvSimData)}
                {/* PV System */}
                {tableRender("Load Details", loadSim, loadSimData)}
                {/* PV System */}
                {tableRender("Level of Self-sufficiency", selfSim, selfSimData)}
            </main>

            {/* Footer */}
            <Footer pageNo="3/10" />
        </div>
    );
};

export default SimulationResults;