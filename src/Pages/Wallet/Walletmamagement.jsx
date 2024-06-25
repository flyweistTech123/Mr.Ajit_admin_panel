import React, { useState } from 'react'
import './Wallet.css'
import HOC from '../../Components/HOC/HOC'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";

import img from '../../Img/img3.png'
import img1 from '../../Img/img4.png'

const Walletmamagement = () => {

    const [step, setStep] = useState(0);
    const navigate = useNavigate()

    const tabledata1 = [
        {
            id: 1,
            DateTime: '24-05-2024',
            LoanID: "123456",
            TransactionID: "12365478952",
            Amount: "25000",
            PayMode: 'Google Pay',
            Status: 'Completed',
        },
        {
            id: 1,
            DateTime: '24-05-2024',
            LoanID: "123456",
            TransactionID: "12365478952",
            Amount: "25000",
            PayMode: 'Google Pay',
            Status: 'Completed',
        },
        {
            id: 1,
            DateTime: '24-05-2024',
            LoanID: "123456",
            TransactionID: "12365478952",
            Amount: "25000",
            PayMode: 'Google Pay',
            Status: 'Completed',
        },
        {
            id: 1,
            DateTime: '24-05-2024',
            LoanID: "123456",
            TransactionID: "12365478952",
            Amount: "25000",
            PayMode: 'Google Pay',
            Status: 'Completed',
        }
    ]

    const tabledata2 = [
        {
            id: 1,
            DateTime: '24-05-2024',
            Amount: "25000",
            TransactionID: "1234567890",
            PaymentStatus: "Completed",
            PaymentMode: 'Bank Name',
        },
        {
            id: 1,
            PaymentMode: 'Google PAy',
            DateTime: '24-05-2024',
            Amount: "25000",
            TransactionID: "1234567890",
            PaymentStatus: "Completed",
        },
        {
            id: 1,
            PaymentMode: 'Google PAy',
            PaymentStatus: "Successful",
            DateTime: '24-05-2024',
            Amount: "25000",
            TransactionID: "1234567890",
            PaymentStatus: "Completed",
        },
        {
            id: 1,
            PaymentMode: 'Google PAy',
            PaymentStatus: "Successful",
            DateTime: '24-05-2024',
            Amount: "25000",
            TransactionID: "1234567890",
            PaymentStatus: "Completed",
        }
    ]



    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props} >
            <div className='kyc7'>
                <p>Holder Name: John Due<br/>
                    Account no. :- 1234567896541<br/>
                    IFSC Code:- 145258622
                </p>
            </div>
        </Tooltip>
    );

    return (
        <>
            <div className='userdetails'>
                <div className='totalusers4'>
                    <div className='totalusers5'>
                        <IoIosArrowBack color='#202224' size={25} onClick={() => navigate(-1)} />
                        <h6>Wallet Management </h6>
                    </div>
                    <div className='totalusers6'>
                        <div className='totalusers7'>
                            <IoIosSearch color='#D5D5D5' size={20} />
                            <input type="search" placeholder='Search by Date, ID or software' />
                        </div>
                        <div className='totalusers8'>
                            <select name="" id="">
                                <option value="">Filter</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='userdetails1'>
                    <div className='userdetails2'>
                        <div className='userdetails3'>
                            <div className='userdetails4'>
                                <img src={img} alt="" />
                            </div>
                            <div className='userdetails5'>
                                <h6>Shop Name</h6>
                                <p>Active</p>
                            </div>
                        </div>
                    </div>

                    <div className='userdetails7'>
                        <div className='userdetails8'>
                            <label htmlFor="">Shop ID</label>
                            <input type="text" placeholder='#12465' />
                        </div>
                        <div className='userdetails8'>
                            <label htmlFor="">Full Name</label>
                            <input type="text" placeholder='Jhon' />
                        </div>
                        <div className='userdetails8'>
                            <label htmlFor="">Mobile No</label>
                            <input type="text" placeholder='9999999' />
                        </div>
                        <div className='userdetails8'>
                            <label htmlFor="">Email</label>
                            <input type="text" placeholder='john@deumail.com' />
                        </div>
                        <div className='userdetails8'>
                            <label htmlFor="">KYC Status</label>
                            <input type="text" placeholder='Verified' />
                        </div>
                    </div>

                    <div className='userdetails9'>
                        <div className="userdetails10">
                            <div
                                className={step === 0 ? "userdetails11" : "userdetails12"}
                                onClick={() => setStep(0)}>
                                <p>Overview</p>
                                {step == 0 &&
                                    <img src={img1} alt="" />
                                }
                            </div>
                            <div
                                className={step === 1 ? "userdetails11" : "userdetails12"}
                                onClick={() => setStep(1)}>
                                <p>Customer Transaction History</p>
                                {step == 1 &&
                                    <img src={img1} alt="" />
                                }
                            </div>
                            <div
                                className={step === 2 ? "userdetails11" : "userdetails12"}
                                onClick={() => setStep(2)}>
                                <p>Shop Transaction History</p>
                                {step == 2 &&
                                    <img src={img1} alt="" />
                                }
                            </div>
                            <div
                                className={step === 3 ? "userdetails11" : "userdetails12"}
                                onClick={() => setStep(3)}>
                                <p>Account Settings</p>
                                {step == 3 &&
                                    <img src={img1} alt="" />
                                }
                            </div>
                        </div>
                        {step === 0 ? (
                            <div className="userdetails13">
                                <div className='wallet1'>
                                    <div className='wallet2'>
                                        <div className='wallet3' style={{ backgroundColor: '#CEE2F3' }}>
                                            <p>Total Mobile DP Price</p>
                                            <p>467547</p>
                                        </div>
                                        <div className='wallet3' style={{ backgroundColor: '#EBD0DC' }}>
                                            <p>Total EMI Collection</p>
                                            <p>467547</p>
                                        </div>
                                        <div className='wallet3' style={{ backgroundColor: '#EBD0DC' }}>
                                            <p>Total Penalty Collection</p>
                                            <p>467547</p>
                                        </div>
                                        <div className='wallet3' style={{ backgroundColor: '#EBD0DC' }}>
                                            <p>Total Down Payment Collection</p>
                                            <p>467547</p>
                                        </div>
                                        <div className='wallet3' style={{ backgroundColor: '#B6D7A8' }}>
                                            <p>Profit Price</p>
                                            <p>467547</p>
                                        </div>
                                    </div>
                                    <div className='wallet2'>
                                        <div className='wallet3' style={{ backgroundColor: '#F9CA9C' }}>
                                            <p>Total Loan Amount</p>
                                            <p>467547</p>
                                        </div>
                                        <div className='wallet3' style={{ backgroundColor: '#E9B8AE' }}>
                                            <p>Pending Collection Amount</p>
                                            <p>467547</p>
                                        </div>
                                        <div className='wallet3' style={{ backgroundColor: '#D1E0E3' }}>
                                            <p>Monthly EMI</p>
                                            <p>467547</p>
                                        </div>
                                        <div className='wallet3' style={{ backgroundColor: '#E5EDFA' }}>
                                            <p>Other EMI / Penalty Pending</p>
                                            <p>467547</p>
                                        </div>
                                        <div className='wallet3' style={{ backgroundColor: '#FFFFFF' }}>
                                            <p>Loss Price</p>
                                            <p>467547</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : step === 1 ? (
                            <div className="userdetails13">
                                <div className='totalusers9'>
                                    <div className='totalusers10'>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Date/Time</th>
                                                    <th>Loan ID</th>
                                                    <th>Transaction ID</th>
                                                    <th>Amount</th>
                                                    <th>Pay Mode</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {tabledata1.map((data) => (
                                                    <tr key={data.id}>
                                                        <td>{data.DateTime}</td>
                                                        <td>{data.LoanID}</td>
                                                        <td>{data.TransactionID}</td>
                                                        <td>{data.Amount}</td>
                                                        <td>{data.PayMode}</td>
                                                        <td style={{ color: "#09B006" }}>
                                                            {data.Status}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>
                        ) : step === 2 ? (
                            <div className="userdetails13">
                                <div className='totalusers9'>
                                    <div className='totalusers10'>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Date/Time</th>
                                                    <th>Transaction ID</th>
                                                    <th>Amount</th>
                                                    <th>Pay Mode</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {tabledata2.map((data) => (
                                                    <tr key={data.id}>
                                                        <td>{data.DateTime}</td>
                                                        <td>{data.TransactionID}</td>
                                                        <td>{data.Amount}</td>

                                                        <td>
                                                            <OverlayTrigger
                                                                placement="top"
                                                                delay={{ show: 250, hide: 400 }}
                                                                overlay={renderTooltip}
                                                            >
                                                                <p>{data.PaymentMode}</p>
                                                            </OverlayTrigger>
                                                        </td>

                                                        <td style={{ color: "#09B006" }}>
                                                            {data.PaymentStatus}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        ) : step === 3 ? (
                            <>
                                <div className="userdetails13">
                                    <div className='wallet5'>
                                        <div className='wallet6'>
                                            <div className='wallet7'>
                                                <p>Upload Document For KYC Completion</p>
                                            </div>
                                            <div className='wallet8'>
                                                <div className='wallet9'>
                                                    <p>Click to upload or <span>drag & drop (Only Pdf)</span></p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </>

                        ) : (

                            ""
                        )}
                    </div>
                    <div className='wallet4'>
                        <button>Download Report</button>
                        <button>Freeze wallet</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(Walletmamagement)