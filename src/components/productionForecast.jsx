import './productionForecast.css';
import Header from './subComponents/header';
import Footer from './subComponents/footer';
import Patterns from './subComponents/patterns';
import { useState } from 'react';



function statsRender(title, percantages) {

    let circumference = 40 * 2 * Math.PI;
    let strokeLength = [circumference * percantages[0] / 100, circumference * percantages[1] / 100];

    return (
        <div className='stats-function'>
            <p>
                {title}
            </p>
            <div className='stats'>
                <div className='stats-text'>
                    <span className='number'>1836</span> <span className='normal'> kWh consumed</span><br />
                    <span className='percentage'>({percantages[0]}%)</span>
                </div>
                <div className='chart'>
                    <svg style={{ overflow: "visible" }} width="100px" height="100px">
                        <circle
                            style={{ transform: "rotate(0deg)", transformOrigin: "center", filter: "drop-shadow(0px 2.507986307144165px 2.507986307144165px #045097)" }}
                            className='' cx={50} cy={50}
                            r={40} fill="none" stroke="#045097" strokeWidth={10} strokeLinecap="round"
                            strokeDasharray={`0,12.5,${strokeLength[0] - 15},${circumference}`}
                        />
                        <circle
                            style={{ transform: "rotate(0deg)", transformOrigin: "center", filter: "drop-shadow(0px 2.507986307144165px 2.507986307144165px #A0D4F5)" }}
                            className='' cx={50} cy={50}
                            r={40} fill="none" stroke="#A0D4F5" strokeWidth={10} strokeLinecap="round"
                            strokeDasharray={`0,${strokeLength[0] + 10},${strokeLength[1]}`}
                        />
                    </svg>
                    <div className='svg-text'>
                        <span className='top'>104.5</span><br />
                        <span>kWh</span>
                    </div>
                </div>
                <div className='stats-text'>
                    <span className='number'>1731.5</span> <span className='normal'> kWh fed to Grid</span><br />
                    <span className='percentage'>({percantages[1]}%)</span>
                </div>
            </div>
        </div>
    );
}

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


const ProductionForecast = () => {

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
            title: 'Own power consumption',
            value: 'Aditya Garimella',
        },
        {
            title: 'Own power consumption',
            value: 'Aditya Garimella',
        },
        {
            title: 'Own power consumption',
            value: 'Aditya Garimella',
        },
        {
            title: 'Own power consumption',
            value: 'Aditya Garimella',
        },
        {
            title: 'Own power consumption',
            value: 'Aditya Garimella',
        },
    ]

    let percantages = [90, 10];

    return (
        <div id='production-forecast' className='production-forecast'>
            {/* Patterns */}
            <Patterns />
            {/* Header */}
            <Header />
            {/* Main Body */}
            <main className='pf-body'>
                <p>Production Forecast</p>
                <div className='data-tables'>
                    {/* PV Panel */}
                    {tableRender(moduleConfiguration)}
                </div>
                {/* 1. Production, import and export */}
                {statsRender("1. Production, import and export", percantages)}
                {/* 2. Dc to AC ratio graph */}
                {statsRender("2. Dc to AC ratio graph", percantages)}
            </main>

            {/* Footer */}
            <Footer pageNo="3/10" />
        </div>
    );
};

export default ProductionForecast;