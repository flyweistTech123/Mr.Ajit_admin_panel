import React, { useState } from 'react'
import './KYC.css'
import HOC from '../../Components/HOC/HOC'
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";

import img from '../../Img/img3.png'
import img1 from '../../Img/img4.png'
import img2 from '../../Img/img5.png'
import img3 from '../../Img/img6.png'
import img4 from '../../Img/img7.png'

const KYCDetails = () => {

    const [step, setStep] = useState(0);
    const navigate = useNavigate()

    const tabledata1 = [
        {
            id: 1,
            JoinDate: '24-05-2024',
            PaymentDate: "Installment",
            CodeBased: "Subscription Based",
            Duration: "3 month",
            Amount: '25,000',
        },
        {
            id: 1,
            JoinDate: '24-05-2024',
            PaymentDate: "Installment",
            CodeBased: "Code Based",
            Duration: "Per Month",
            Amount: '25,000',
        },
        {
            id: 1,
            JoinDate: '24-05-2024',
            PaymentDate: "Installment",
            CodeBased: "Subscription Based",
            Duration: "3 month",
            Amount: '25,000',
        },
        {
            id: 1,
            JoinDate: '24-05-2024',
            PaymentDate: "Installment",
            CodeBased: "Code Based",
            Duration: "Per Month",
            Amount: '25,000',
        }
    ]

    const tabledata2 = [
        {
            id: 1,
            JoinDate: '24-05-2024',
            Subscription: "Installment",
            AmountSubs: "25000",
            TransactionID: "1234567890",
            PaymentMode: 'Google PAy',
            PaymentDate: "24/05/24",
            PaymentStatus: "Successful"
        },
        {
            id: 1,
            JoinDate: '24-05-2024',
            Subscription: "Installment",
            AmountSubs: "25000",
            TransactionID: "1234567890",
            PaymentMode: 'Google PAy',
            PaymentDate: "24/05/24",
            PaymentStatus: "Successful"
        },
        {
            id: 1,
            JoinDate: '24-05-2024',
            Subscription: "Installment",
            AmountSubs: "25000",
            TransactionID: "1234567890",
            PaymentMode: 'Net Banking',
            PaymentDate: "24/05/24",
            PaymentStatus: "Successful"
        },
        {
            id: 1,
            JoinDate: '24-05-2024',
            Subscription: "Installment",
            AmountSubs: "25000",
            TransactionID: "1234567890",
            PaymentMode: 'UPI',
            PaymentDate: "24/05/24",
            PaymentStatus: "Successful"
        }
    ]

    return (
        <>
            <div className='userdetails'>
                <div className='totalusers5'>
                    <IoIosArrowBack color='#202224' size={25} onClick={() => navigate(-1)} />
                    <h6>Shop Details</h6>
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
                        <div className='userdetails6'>
                            <button>Download Report</button>
                        </div>
                    </div>

                    <div className='userdetails7'>
                        <div className='userdetails8'>
                            <label htmlFor="">Owner Name</label>
                            <input type="text" placeholder='Jhon' />
                        </div>
                        <div className='userdetails8'>
                            <label htmlFor="">Father’s Name</label>
                            <input type="text" placeholder='Jhon' />
                        </div>
                        <div className='userdetails8'>
                            <label htmlFor="">Mother’s Name</label>
                            <input type="text" placeholder='Jhon' />
                        </div>
                        <div className='userdetails8'>
                            <label htmlFor="">Email</label>
                            <input type="text" placeholder='john@deumail.com' />
                        </div>
                        <div className='userdetails8'>
                            <label htmlFor="">Mobile No.</label>
                            <input type="text" placeholder='453875329' />
                        </div>
                        <div className='userdetails8'>
                            <label htmlFor="">PAN No.</label>
                            <input type="text" placeholder='PANFP6888C' />
                        </div>
                        <div className='userdetails8'>
                            <label htmlFor="">Adhaar No.</label>
                            <input type="text" placeholder='2534 2124 5478' />
                        </div>
                        <div className='userdetails8'>
                            <label htmlFor="">LandLine No.</label>
                            <input type="text" placeholder='222222' />
                        </div>
                        <div className='userdetails8'>
                            <label htmlFor="">GST No.</label>
                            <input type="text" placeholder='GST' />
                        </div>
                        <div className='userdetails8'>
                            <label htmlFor="">Shop Address</label>
                            <input type="text" placeholder='Address' />
                        </div>
                        <div className='userdetails8'>
                            <label htmlFor="">Permanent Address</label>
                            <input type="text" placeholder='Address' />
                        </div>
                    </div>

                    <div className='userdetails9'>
                        <div className="userdetails10">
                            <div
                                className={step === 0 ? "userdetails11" : "userdetails12"}
                                onClick={() => setStep(0)}>
                                <p>Payment Summary</p>
                                {step == 0 &&
                                    <img src={img1} alt="" />
                                }
                            </div>
                            <div
                                className={step === 1 ? "userdetails11" : "userdetails12"}
                                onClick={() => setStep(1)}>
                                <p>Transaction Summary</p>
                                {step == 1 &&
                                    <img src={img1} alt="" />
                                }
                            </div>
                            <div
                                className={step === 2 ? "userdetails11" : "userdetails12"}
                                onClick={() => setStep(2)}>
                                <p>Documents</p>
                                {step == 2 &&
                                    <img src={img1} alt="" />
                                }
                            </div>
                        </div>
                        {step === 0 ? (
                            <div className="userdetails13">
                                <div className='totalusers9'>
                                    <div className='totalusers10'>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Join Date</th>
                                                    <th>Payment Date</th>
                                                    <th>Subscription Based / Code Based</th>
                                                    <th>Duration</th>
                                                    <th>Amount</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {tabledata1.map((data) => (
                                                    <tr key={data.id}>
                                                        <td>{data.JoinDate}</td>
                                                        <td>{data.PaymentDate}</td>
                                                        <td>{data.CodeBased}</td>
                                                        <td>{data.Duration}</td>
                                                        <td>{data.Amount}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
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
                                                    <th>Join Date</th>
                                                    <th>Subscription</th>
                                                    <th>Amount of Subs.</th>
                                                    <th>Transaction ID</th>
                                                    <th>Payment Mode</th>
                                                    <th>Payment Date</th>
                                                    <th>Payment Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {tabledata2.map((data) => (
                                                    <tr key={data.id}>
                                                        <td>{data.JoinDate}</td>
                                                        <td>{data.Subscription}</td>
                                                        <td>{data.AmountSubs}</td>
                                                        <td>{data.TransactionID}</td>
                                                        <td>{data.PaymentMode}</td>
                                                        <td>{data.PaymentDate}</td>
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
                        ) : step === 2 ? (
                            <>
                                <div className="userdetails13">
                                    <div className='userdetails14'>
                                        <img src={img2} alt="" />
                                        <img src={img4} alt="" />
                                        <img src={img3} alt="" />
                                    </div>
                                </div>
                            </>

                        ) : (

                            ""
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(KYCDetails)