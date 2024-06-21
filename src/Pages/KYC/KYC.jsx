import React from 'react'
import './KYC.css'
import HOC from '../../Components/HOC/HOC'
import { useNavigate } from 'react-router-dom';

import { IoIosArrowBack } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { MdRemoveRedEye } from "react-icons/md";


const KYC = () => {
    const navigate = useNavigate()
    const tabledata = [
        {
            id: 1,
            userId: '#14001',
            shopname: "JJ Comm.",
            ownerName: "John Doe",
            mobile: "+91 82456 25862",
            KYCStatus: 'Pending',
            PaymentStatus: "Paid"
        },
        {
            id: 2,
            userId: '#14001',
            shopname: "JJ Comm.",
            ownerName: "John Doe",
            mobile: "+91 82456 25862",
            KYCStatus: 'Pending',
            PaymentStatus: "Unpaid"
        },
        {
            id: 1,
            userId: '#14001',
            shopname: "JJ Comm.",
            ownerName: "John Doe",
            mobile: "+91 82456 25862",
            KYCStatus: 'Pending',
            PaymentStatus: "Paid"
        },
        {
            id: 2,
            userId: '#14001',
            shopname: "JJ Comm.",
            ownerName: "John Doe",
            mobile: "+91 82456 25862",
            KYCStatus: 'Pending',
            PaymentStatus: "Unpaid"
        }
    ]
    return (
        <>
            <div className='totalusers'>
                <div className='totalusers1'>
                    <div className='totalusers2'>
                        <div className='totalusers3'>
                            <h6>Create ID</h6>
                        </div>
                    </div>

                    <div className='totalusers4'>
                        <div className='totalusers5'>
                            <IoIosArrowBack color='#202224' size={25} onClick={() => navigate(-1)} />
                            <h6>KYC</h6>
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
                                        <th>Shop ID</th>
                                        <th>Shop Name</th>
                                        <th>Owner Name</th>
                                        <th>Mobile No.</th>
                                        <th>KYC Status</th>
                                        <th>Payment Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tabledata.map((data) => (
                                        <tr key={data.id}>
                                            <td>{data.userId}</td>
                                            <td>{data.shopname}</td>
                                            <td>{data.ownerName}</td>
                                            <td>{data.mobile}</td>
                                            <td>
                                                <div className='kyc'>
                                                    <div className='kyc1' style={{ backgroundColor: data.KYCStatus === 'Pending' ? '#E57676' : data.KYCStatus === 'appvoed' ? '#00B69B' : 'transparent' }}>
                                                        {data.KYCStatus}
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className='kyc' >
                                                    <div className='kyc1' style={{ backgroundColor: data.PaymentStatus === 'Unpaid' ? '#E57676' : data.PaymentStatus === 'Paid' ? '#00B69B' : 'transparent' }}>
                                                        {data.PaymentStatus}
                                                    </div>
                                                </div>
                                            </td>
                                            <td><MdRemoveRedEye color='#1C1B1F' size={20} /></td>
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

export default HOC(KYC)