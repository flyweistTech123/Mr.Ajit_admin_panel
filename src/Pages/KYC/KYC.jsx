import React, { useRef, useState } from 'react'
import './KYC.css'
import HOC from '../../Components/HOC/HOC'
import { useNavigate } from 'react-router-dom';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { MdRemoveRedEye } from "react-icons/md";
import 'bootstrap/dist/css/bootstrap.min.css';



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
            KYCStatus: 'verified',
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
            KYCStatus: 'verified',
            PaymentStatus: "Unpaid"
        }
    ]


    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props} >
            <div className='kyc7'>
                <p>Your Aadhaar Is not Link your Bank Account !</p>
            </div>
        </Tooltip>
    );


    return (
        <>
            <div className='totalusers'>
                <div className='totalusers1'>
                    <div className='totalusers2'>
                        <div className='totalusers3' onClick={() => navigate('/createid')}>
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
                                                    <OverlayTrigger
                                                        placement="top"
                                                        delay={{ show: 250, hide: 400 }}
                                                        overlay={renderTooltip}
                                                    >
                                                        <div className='kyc1' style={{ backgroundColor: data.KYCStatus === 'Pending' ? '#E57676' : data.KYCStatus === 'verified' ? '#00B69B' : 'transparent' }}>
                                                            {data.KYCStatus}
                                                        </div>
                                                    </OverlayTrigger>
                                                </div>

                                            </td>
                                            <td>
                                                <div className='kyc' >
                                                    <div className='kyc1' style={{ backgroundColor: data.PaymentStatus === 'Unpaid' ? '#E57676' : data.PaymentStatus === 'Paid' ? '#00B69B' : 'transparent' }}>
                                                        {data.PaymentStatus}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='totalusers11'><MdRemoveRedEye color='#1C1B1F' size={20} onClick={() => navigate('/kycdetails')} /></td>
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