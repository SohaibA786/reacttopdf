import './consumptionChart.css';
import Header from './subComponents/header';
import Footer from './subComponents/footer';
import Patterns from './subComponents/patterns';

import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Filler,
    BarElement,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Filler,
    BarElement,
    Legend,
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

function chartBallText(data) {
    return (
        <>
            {
                data.map((item, index) => {
                    return (
                        <div key={index} className='chart-ball-text'>
                            <div className='ball' style={{ backgroundColor: item.backgroundColor, height: "15px", width: "15px", borderRadius: "50%" }}></div>
                            <p>{item.label}</p>
                        </div>
                    )
                })
            }
        </>
    )
}


const ConsumptionChart = () => {

    let consumptionChart = [
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
    ]

    let options = {
        responsive: false,

        plugins: {
            tooltip: {
                enabled: false // <-- this option disables tooltips
            },
            legend: {
                display: false, // Hide the legend
            },
        },
        scales: {
            x: {
                ticks: { color: '#929292', font: { size: 10 }, padding: 5, },
                beginAtZero: true,
                title: {
                    color: '#000',
                    font: {
                        size: 10,
                    },
                    display: true,
                    text: 'Month', // X-axis title
                },
                grid: {
                    display: false, // Extended vertical lines below x-axis only
                    drawBorder: false,
                },
            },
            y: {
                ticks: { color: '#929292', font: { size: 10 }, padding: 10, },
                beginAtZero: true,
                title: {
                    color: '#000',
                    font: {
                        size: 10,
                    },
                    display: true,
                    text: 'Energy in kWh', // Y-axis title
                },
                grid: {
                    drawBorder: false, // <-- this removes y-axis line
                }
            },
        },
    };

    let state = {
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'Consumption',
                    backgroundColor: '#045097',
                    borderColor: '#045097',
                    borderWidth: 1,
                    data: [2500, 1900, 3000, 5000, 4000, 3000, 6500, 6000, 2000, 3000, 4000, 5000],
                    borderRadius: 10, // Round the top edges of bars
                    barThickness: 8,
                },
            ],
        },
    };

    return (
        <div id='consumption-chart' className='consumption-chart'>
            {/* Patterns */}
            <Patterns />
            {/* Header */}
            <Header />
            {/* Main Body */}
            <main className='cc-body'>
                <p>Consumption Chart</p>
                <div className='data-tables'>
                    {/* PV Panel */}
                    {tableRender(consumptionChart)}
                </div>

                <p style={{ marginTop: "30px", marginBottom: "20px" }}>Chart</p>
                <Bar
                    height="340px"
                    width="495px"
                    options={options}
                    data={state.data}
                />
                <div className='chart-ball-text-container'>
                    {chartBallText(state.data.datasets)}
                </div>
            </main>

            {/* Footer */}
            <Footer pageNo="3/10" />
        </div>
    );
};

export default ConsumptionChart;

