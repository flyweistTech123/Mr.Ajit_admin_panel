import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import HOC from '../../Components/HOC/HOC'
import { useNavigate } from 'react-router-dom';
import {
    CircularProgressbar,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { IoIosArrowForward } from "react-icons/io";
import ReactApexChart from 'react-apexcharts';


const Dashboard = () => {
    const percentage = 70;
    const navigate = useNavigate()

    const [series, setSeries] = useState([
        {
            name: '2023',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
            color: '#2196F3'
        },
        {
            name: '2024',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
            color: '#FFA500'
        },
    ]);

    const [options, setOptions] = useState({
        chart: {
            type: 'bar',
            height: 350
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '30%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
        yaxis: {
            title: {
                text: '₹ (Amount)'
            }
        },
        fill: {
            opacity: 1
        },
        legend: {
            show: true,
            position: 'top'
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "₹ " + val + " Amount";
                }
            }
        }
    });



    const [series1, setSeries1] = useState({
        name: 'Device',
        data: Array.from({ length: 10 }, () => Math.floor(Math.random() * 100)),
        color: '#F44336'
    });

    const [series2, setSeries2] = useState({
        name: 'Device',
        data: Array.from({ length: 10 }, () => Math.floor(Math.random() * 100)),
        color:"#00B060"
    });

    const [series3, setSeries3] = useState({
        name: 'Device',
        data: Array.from({ length: 10 }, () => Math.floor(Math.random() * 100)),
        color:"#FFC107"
    });

    const [options1] = useState({
        chart: {
            id: 'realtime',
            height: 350,
            type: 'line',
            animations: {
                enabled: true,
                easing: 'linear',
                dynamicAnimation: {
                    speed: 1000
                }
            },
            
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        markers: {
            size: 0
        },
        xaxis: {
            type: 'category',
            categories: ['11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM']
        },
        yaxis: {
            max: 100
        },
        legend: {
            show: true,
            position: 'top'
        },
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const newSeries = [{
                data: Array.from({ length: 10 }, () => Math.floor(Math.random() * 100))
            }];
            setSeries1(newSeries);
        }, 1000);

        return () => clearInterval(interval);
    }, []);


    return (
        <>
            <div className='dashboard'>
                <div className='dashboard1'>
                    <div className='dashboard2'>
                        <div className='dashboard3' onClick={()=>navigate('/users')}>
                            <div className='dashboard4'>
                                <CircularProgressbar
                                    value={percentage}
                                    strokeWidth={50}
                                    styles={buildStyles({
                                        strokeLinecap: "butt",
                                        pathColor: "#709288",
                                        backgroundColor: "#FFFFFF",
                                        trailColor: '#d6d6d6',
                                    })}
                                />
                            </div>
                            <div className='dashboard5'>
                                <p>Total Users</p>
                                <h6>12.2K <IoIosArrowForward /></h6>
                            </div>
                        </div>
                        <div className='dashboard3' onClick={()=>navigate('/kyc')}>
                            <div className='dashboard4'>
                                <CircularProgressbar
                                    value={percentage}
                                    strokeWidth={50}
                                    styles={buildStyles({
                                        strokeLinecap: "butt",
                                        pathColor: "#709288",
                                        backgroundColor: "#FFFFFF",
                                        trailColor: '#d6d6d6',
                                    })}
                                />
                            </div>
                            <div className='dashboard5'>
                                <p>Pending KYC</p>
                                <h6>12.2K <IoIosArrowForward /></h6>
                            </div>
                        </div>
                        <div className='dashboard3' onClick={()=>navigate('/payment')}>
                            <div className='dashboard4'>
                                <CircularProgressbar
                                    value={percentage}
                                    strokeWidth={50}
                                    styles={buildStyles({
                                        strokeLinecap: "butt",
                                        pathColor: "#709288",
                                        backgroundColor: "#FFFFFF",
                                        trailColor: '#d6d6d6',
                                    })}
                                />
                            </div>
                            <div className='dashboard5'>
                                <p>PendingPayment</p>
                                <h6>12.2K <IoIosArrowForward /></h6>
                            </div>
                        </div>
                    </div>

                    <div className='dashboard6'>
                        <div className='dashboard7'>
                            <h3>Anual Report</h3>
                            <div className='dashboard8'>
                                <select name="" id="">
                                    <option value="">All State</option>
                                </select>
                                <select name="" id="">
                                    <option value="">Month</option>
                                </select>
                            </div>
                        </div>

                        <div className='dashboard9'>
                            <ReactApexChart options={options} series={series} type="bar" height={350} />
                        </div>
                    </div>
                    <div className='dashboard6'>
                        <div className='dashboard7'>
                            <h3>Payment Report</h3>
                            <div className='dashboard8'>
                                <select name="" id="">
                                    <option value="">Month</option>
                                </select>
                            </div>
                        </div>

                        <div className='dashboard9'>
                            <ReactApexChart options={options1} series={[series1, series2, series3]} type="line" height={350} />
                        </div>
                    </div>
                    <div className='dashboard6'>
                        <div className='dashboard7'>
                            <h3>Device Revenue</h3>
                            <div className='dashboard8'>
                                <select name="" id="">
                                    <option value="">Month</option>
                                </select>
                            </div>
                        </div>

                        <div className='dashboard9'>
                            <ReactApexChart options={options1} series={[series1, series2, series3]} type="line" height={350} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(Dashboard)