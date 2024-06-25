import React from 'react'
import './Payment.css'
import HOC from '../../Components/HOC/HOC'
import { useNavigate } from 'react-router-dom';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { MdRemoveRedEye } from "react-icons/md";


const Payment = () => {
    const navigate = useNavigate()
    const tabledata = [
        {
            id: 1,
            LoanID: '1254785236',
            CustomerName: "John Doe",
            ShopID: "#145203",
            Amount: "25000",
            Payment: 'Paid',
            PayMode: "Online Net Banking"
        },
        {
            id: 2,
            LoanID: '1254785236',
            CustomerName: "John Doe",
            ShopID: "#145203",
            Amount: "25000",
            Payment: 'Failed',
            PayMode: "Online Net Banking"
        },
        {
            id: 3,
            LoanID: '1254785236',
            CustomerName: "John Doe",
            ShopID: "#145203",
            Amount: "25000",
            Payment: 'Pending',
            PayMode: "Online Net Banking"
        },
        {
            id: 4,
            LoanID: '1254785236',
            CustomerName: "John Doe",
            ShopID: "#145203",
            Amount: "25000",
            Payment: 'Paid',
            PayMode: "Online Net Banking"
        }
    ]

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props} >
            <div className='kyc7'>
                <p>Bank Server Issue !</p>
            </div>
        </Tooltip>
    );
    return (
        <>
            <div className='totalusers'>
                <div className='totalusers1'>
                    <div className='totalusers4'>
                        <div className='totalusers5'>
                            <IoIosArrowBack color='#202224' size={25} onClick={() => navigate(-1)} />
                            <h6>Payment</h6>
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
                                        <th>Customer Name</th>
                                        <th>Shop ID</th>
                                        <th>Amount</th>
                                        <th>Payment</th>
                                        <th>Pay Mode</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tabledata.map((data) => (
                                        <tr key={data.id}>
                                            <td>{data.LoanID}</td>
                                            <td>{data.CustomerName}</td>
                                            <td>{data.ShopID}</td>
                                            <td>{data.Amount}</td>
                                            <td>
                                                <div className='kyc'>
                                                    <OverlayTrigger
                                                        placement="top"
                                                        delay={{ show: 250, hide: 400 }}
                                                        overlay={renderTooltip}
                                                    >
                                                        <div className='kyc1' style={{ backgroundColor: data.Payment === 'Paid' ? '#00B69B' : data.Payment === 'Failed' ? '#FFCB6A' : '#E57676' }}>
                                                            {data.Payment}
                                                        </div>
                                                    </OverlayTrigger>
                                                </div>
                                            </td>
                                            <td>{data.PayMode}</td>
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

export default HOC(Payment)