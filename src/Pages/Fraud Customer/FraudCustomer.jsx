import React from 'react'
import './FraudCustomer.css'
import HOC from '../../Components/HOC/HOC'
import { useNavigate } from 'react-router-dom';

import { IoIosArrowBack } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { MdRemoveRedEye } from "react-icons/md";


const FraudCustomer = () => {
    const navigate = useNavigate()
    const tabledata = [
        {
            id: 1,
            LoanID : '13-05-2024',
            CustomerName: "John Doe",
            ShopID: "#145203",
            LoanAmount: "80,000",
        },
        {
            id: 2,
            LoanID : '13-05-2024',
            CustomerName: "John Doe",
            ShopID: "#145203",
            LoanAmount: "80,000",
        },
        {
            id: 3,
            LoanID : '13-05-2024',
            CustomerName: "John Doe",
            ShopID: "#145203",
            LoanAmount: "80,000",
        },
        {
            id: 4,
            LoanID : '13-05-2024',
            CustomerName: "John Doe",
            ShopID: "#145203",
            LoanAmount: "80,000",
        }
    ]
    return (
        <>
            <div className='totalusers'>
                <div className='totalusers1'>
                    <div className='totalusers4'>
                        <div className='totalusers5'>
                            <IoIosArrowBack color='#202224' size={25} onClick={() => navigate(-1)} />
                            <h6>Fraud Customer List Report</h6>
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


                    <div className='totalusers9'>
                        <div className='totalusers10'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Loan ID</th>
                                        <th>Shop ID</th>
                                        <th>Customer Name</th>
                                        <th>Loan Amount</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tabledata.map((data) => (
                                        <tr key={data.id}>
                                            <td>{data.LoanID}</td>
                                            <td>{data.ShopID}</td>
                                            <td>{data.CustomerName}</td>
                                            <td>{data.LoanAmount}</td>
                                            <td className='totalusers11'><MdRemoveRedEye color='#1C1B1F' size={20} onClick={()=>navigate('/frauduser_Detail')} /></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div >
        </>
    )
}

export default HOC(FraudCustomer)