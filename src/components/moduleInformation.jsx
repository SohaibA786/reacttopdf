import './moduleInformation.css';
import Header from './subComponents/header';
import Footer from './subComponents/footer';
import Patterns from './subComponents/patterns';

import React from 'react';

import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
);


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
                            <tr key={index} className={index % 2 === 0 ? 'one' : 'two'}>
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

    let options = {
        responsive: false,
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Time in Years', // X-axis title
                },
                grid: {
                    drawOnChartArea: false, // Extended vertical lines below x-axis only

                },
            },
            y: {
                beginAtZero: true,
                display: true,
                title: {
                    display: true,
                    text: 'Remaining Output in %', // X-axis title
                },
                grid: {
                    display: true, // Show horizontal grid lines
                },
            },
        },
        plugins: {
            legend: {
                display: false, // Hide the legend
            },
        }


    }
    let arr = [34, 35, 42, 39, 44, 39, 36, 34, 35, 40, 39, 44, 34, 35, 34, 35, 41, 39, 44];
    arr = arr.map(item => item + 45);
    let arr2 = [44, 39, 48, 45, 52, 49, 60, 44, 39, 48, 45, 52, 55, 60, 52, 45, 48, 45, 52];
    arr2 = arr2.map(item => item + 50);

    let state = {
        data: {
            // Add labels till 16
            labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'],
            datasets: [
                {
                    label: "Subscriptions",
                    backgroundColor: "#04509777",
                    borderColor: "#045097",
                    data: arr,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 0,

                },
                {
                    label: "Videos Made",
                    backgroundColor: "#7ACCF977",
                    borderColor: "#7ACCF9",
                    data: arr2,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 0,
                },
            ]
        }
    }
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

                <p style={{marginTop: "30px", marginBottom: "20px"}}>Degradation of Module</p>
                <Line
                    height="315px"
                    width="495px"
                    options={options}
                    data={state.data}
                />
            </main>

            {/* Footer */}
            <Footer pageNo="3/10" />
        </div>
    );
};

export default ModuleInformation;