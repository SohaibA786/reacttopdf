import './moduleInformation.css';
import Header from './subComponents/header';
import Footer from './subComponents/footer';
import Patterns from './subComponents/patterns';

import React from 'react';

// import ApexCharts from "react-apexcharts"
import { Line } from 'react-chartjs-2';
// import faker from 'faker';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
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

    // let state = {
    //     series: [{
    //         name: 'series1',
    //         data: [31, 40, 28, 51, 42, 109, 100]
    //     }, {
    //         name: 'series2',
    //         data: [11, 32, 45, 32, 34, 52, 41]
    //     }],
    //     options: {
    //         chart: {
    //             height: 350,
    //             type: 'area'
    //         },
    //         dataLabels: {
    //             enabled: false
    //         },
    //         stroke: {
    //             curve: 'smooth'
    //         },
    //         xaxis: {
    //             type: 'numbers',
    //             categories: ["1", "2", "3", "4", "5", "6", "7"]
    //         },
    //         tooltip: {
    //             x: {
    //                 format: 'dd/MM/yy HH:mm'
    //             },
    //         },
    //     },
    // }


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


    
 const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
   const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [81, 60, 29, 31, 46, 99, 108],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: [31, 40, 28, 51, 42, 109, 100],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

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
                <Line
                    options={options} data={data}
                    height={405}
                    width={405}
                />
                {/* <div id="chart">
                    <ApexCharts options={state.options} series={state.series} type="area" height={350} />
                </div> */}
            </main>

            {/* Footer */}
            <Footer pageNo="3/10" />
        </div>
    );
};

export default ModuleInformation;