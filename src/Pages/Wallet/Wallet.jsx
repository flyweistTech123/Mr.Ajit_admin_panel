import React from 'react'
import './Wallet.css'
import HOC from '../../Components/HOC/HOC'
import { useNavigate } from 'react-router-dom';

import { IoIosArrowBack } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { MdRemoveRedEye } from "react-icons/md";


const Wallet = () => {
    const navigate = useNavigate()
    const tabledata = [
        {
            id: 1,
            ShopName: 'JJ COM',
            OwnerName: "John Doe",
            ShopID: "#145203",
            RetailBalance: "25000",
            VirtualBalance: "25000",
            TransactionID: '1245852365',
            PaidPayment: "25000",
            PendingPayment: "0",
        },
        {
            id: 2,
            ShopName: 'JJ COM',
            OwnerName: "John Doe",
            ShopID: "#145203",
            RetailBalance: "25000",
            VirtualBalance: "25000",
            TransactionID: '1245852365',
            PaidPayment: "25000",
            PendingPayment: "0",
        },
        {
            id: 3,
            ShopName: 'JJ COM',
            OwnerName: "John Doe",
            ShopID: "#145203",
            RetailBalance: "25000",
            VirtualBalance: "25000",
            TransactionID: '1245852365',
            PaidPayment: "25000",
            PendingPayment: "0",
        },
        {
            id: 4,
            ShopName: 'JJ COM',
            OwnerName: "John Doe",
            ShopID: "#145203",
            RetailBalance: "25000",
            VirtualBalance: "25000",
            TransactionID: '1245852365',
            PaidPayment: "25000",
            PendingPayment: "0",
        }
    ]
    return (
        <>
            <div className='totalusers'>
                <div className='totalusers1'>
                    <div className='totalusers4'>
                        <div className='totalusers5'>
                            <IoIosArrowBack color='#202224' size={25} onClick={() => navigate(-1)} />
                            <h6>Wallet</h6>
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
                                        <th>Retail Balance</th>
                                        <th>Virtual Balance</th>
                                        <th>Transaction ID</th>
                                        <th>Paid Payment</th>
                                        <th>Pending Payment</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tabledata.map((data) => (
                                        <tr key={data.id}>
                                            <td>{data.ShopID}</td>
                                            <td>{data.ShopName}</td>
                                            <td>{data.OwnerName}</td>
                                            <td>{data.RetailBalance}</td>
                                            <td>{data.VirtualBalance}</td>
                                            <td>{data.TransactionID}</td>
                                            <td>{data.PaidPayment}</td>
                                            <td>{data.PendingPayment}</td>
                                            <td className='totalusers11'><MdRemoveRedEye color='#1C1B1F' size={20}  onClick={()=>navigate('/wallet_mamagement')}/></td>
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

export default HOC(Wallet)