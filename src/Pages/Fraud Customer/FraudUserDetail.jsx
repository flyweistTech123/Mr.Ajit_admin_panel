import React, { useState } from 'react'
import './FraudCustomer.css'
import HOC from '../../Components/HOC/HOC'
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";

import img from '../../Img/img3.png'
import img1 from '../../Img/img4.png'
import img2 from '../../Img/img5.png'
import img3 from '../../Img/img6.png'
import img4 from '../../Img/img7.png'

const FraudUserDetail = () => {

    const [step, setStep] = useState(0);
    const navigate = useNavigate()

    const tabledata1 = [
        {
            id: 1,
            DueDate: '24-05-2024',
            Type: "Installment",
            EMIAmount: "25000",
            InterestAmount: "1200",
            ClosingEMIAmount: '35000',
            PaymentStatus: "Received"
        },
        {
            id: 1,
            DueDate: '24-05-2024',
            Type: "Installment",
            EMIAmount: "25000",
            InterestAmount: "1200",
            ClosingEMIAmount: '35000',
            PaymentStatus: "Received"
        },
        {
            id: 1,
            DueDate: '24-05-2024',
            Type: "Installment",
            EMIAmount: "25000",
            InterestAmount: "1200",
            ClosingEMIAmount: '35000',
            PaymentStatus: "Pending"
        },
        {
            id: 1,
            DueDate: '24-05-2024',
            Type: "Installment",
            EMIAmount: "25000",
            InterestAmount: "1200",
            ClosingEMIAmount: '35000',
            PaymentStatus: "Pending"
        }
    ]

    const tabledata2 = [
        {
            id: 1,
            DueDate: '24-05-2024',
            Type: "Installment",
            EMIAmount: "25000",
            TransactionID: "1234567890",
            PaymentMode: 'Google PAy',
            PaymentDate: "24/05/24",
            PaymentStatus: "Successful"
        },
        {
            id: 1,
            DueDate: '24-05-2024',
            Type: "Installment",
            EMIAmount: "25000",
            TransactionID: "1234567890",
            PaymentMode: 'UPI',
            PaymentDate: "24/05/24",
            PaymentStatus: "Successful"
        },
        {
            id: 1,
            DueDate: '24-05-2024',
            Type: "Installment",
            EMIAmount: "25000",
            TransactionID: "1234567890",
            PaymentMode: 'Net Banking',
            PaymentDate: "24/05/24",
            PaymentStatus: "Successful"
        },
        {
            id: 1,
            DueDate: '24-05-2024',
            Type: "Installment",
            EMIAmount: "25000",
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
                    <h6>Customer Details</h6>
                </div>
                <div className='userdetails1'>
                    <div className='userdetails2'>
                        <div className='userdetails3'>
                            <div className='userdetails4'>
                                <img src={img} alt="" />
                            </div>
                            <div className='userdetails5'>
                                <h6>Customer Name</h6>
                                <p style={{color:'#F44336'}}>Fraud</p>
                            </div>
                        </div>
                        <div className='userdetails6'>
                            <button>Download Report</button>
                        </div>
                    </div>

                    <div className='userdetails7'>
                        <div className='userdetails8'>
                            <label htmlFor="">Father’s Name</label>
                            <input type="text" placeholder='Jhon' />
                        </div>
                        <div className='userdetails8'>
                            <label htmlFor="">Mother’s Name</label>
                            <input type="text" placeholder='Jhon' />
                        </div>
                        <div className='userdetails8'>
                            <label htmlFor="">Spouse’s Name</label>
                            <input type="text" placeholder='jhondoe@gmail.com' />
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
                            <label htmlFor="">Email</label>
                            <input type="text" placeholder='john@deumail.com' />
                        </div>
                        <div className='userdetails8'>
                            <label htmlFor="">Residence Address</label>
                            <input type="text" placeholder='Jhon' />
                        </div>
                        <div className='userdetails8'>
                            <label htmlFor="">Permanent Address</label>
                            <input type="text" placeholder='Jhon' />
                        </div>
                        <div className='userdetails8'>
                            <label htmlFor="">Relation 1 (Name)</label>
                            <input type="text" placeholder=' Relation 1 (Name)' />
                        </div>
                        <div className='userdetails8'>
                            <label htmlFor="">Relation</label>
                            <input type="text" placeholder='Brother' />
                        </div>
                        <div className='userdetails8'>
                            <label htmlFor="">Relation 1 (Mobile No.)</label>
                            <input type="text" placeholder='+91 85647 58654' />
                        </div>
                        <div className='userdetails8'>
                            <label htmlFor=""> Relation 2 (Name)</label>
                            <input type="text" placeholder='Aman' />
                        </div>
                        <div className='userdetails8'>
                            <label htmlFor="">Relation</label>
                            <input type="text" placeholder='Brother' />
                        </div>
                        <div className='userdetails8'>
                            <label htmlFor=""> Relation 2 (Mobile No.)</label>
                            <input type="text" placeholder='+91 85647 58654' />
                        </div>
                    </div>

                    <div className='userdetails9'>
                        <div className="userdetails10">
                            <div
                                className={step === 0 ? "userdetails11" : "userdetails12"}
                                onClick={() => setStep(0)}>
                                <p>Loan Account Summary</p>
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
                                <p>Loan Related Document</p>
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
                                                    <th>Due Date</th>
                                                    <th>Type</th>
                                                    <th>EMI Amount</th>
                                                    <th>Interest Amount</th>
                                                    <th>Closing EMI Amount</th>
                                                    <th>Payment Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {tabledata1.map((data) => (
                                                    <tr key={data.id}>
                                                        <td>{data.DueDate}</td>
                                                        <td>{data.Type}</td>
                                                        <td>{data.EMIAmount}</td>
                                                        <td>{data.InterestAmount}</td>
                                                        <td>{data.ClosingEMIAmount}</td>
                                                        <td style={{ color: data.PaymentStatus === "Pending" ? "#F44336" : "#202224" }}>
                                                            {data.PaymentStatus}
                                                        </td>
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
                                                    <th>Due Date</th>
                                                    <th>Type</th>
                                                    <th>EMI Amount</th>
                                                    <th>Transaction ID</th>
                                                    <th>Payment Mode</th>
                                                    <th>Payment Date</th>
                                                    <th>Payment Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {tabledata2.map((data) => (
                                                    <tr key={data.id}>
                                                        <td>{data.DueDate}</td>
                                                        <td>{data.Type}</td>
                                                        <td>{data.EMIAmount}</td>
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

export default HOC(FraudUserDetail)