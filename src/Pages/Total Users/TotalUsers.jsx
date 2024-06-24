import React from 'react'
import './TotalUsers.css'
import HOC from '../../Components/HOC/HOC'
import { useNavigate } from 'react-router-dom';

import { IoIosArrowBack } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { MdRemoveRedEye } from "react-icons/md";


const TotalUsers = () => {
    const navigate = useNavigate()
    const tabledata = [
        {
            id: 1,
            userId: '#14001',
            shopname: "JJ Comm.",
            ownerName: "John Doe",
            mobile: "+91 82456 25862",
            email: 'Johndoe@gmail.com',
            state: "Noida"
        },
        {
            id: 1,
            userId: '#14001',
            shopname: "JJ Comm.",
            ownerName: "John Doe",
            mobile: "+91 82456 25862",
            email: 'Johndoe@gmail.com',
            state: "Noida"
        }
    ]
    return (
        <>
            <div className='totalusers'>
                <div className='totalusers1'>
                    <div className='totalusers2'>
                        <div className='totalusers3'>
                            <h6>Total User: 12.2K</h6>
                        </div>
                    </div>

                    <div className='totalusers4'>
                        <div className='totalusers5'>
                            <IoIosArrowBack color='#202224' size={25}  onClick={()=>navigate(-1)}/>
                            <h6>Total Users</h6>
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
                                        <th>User ID</th>
                                        <th>Shop Name</th>
                                        <th>Owner Name</th>
                                        <th>Mobile No.</th>
                                        <th>Email</th>
                                        <th>State</th>
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
                                            <td>{data.email}</td>
                                            <td>{data.state}</td>
                                            <td className='totalusers11'><MdRemoveRedEye  color='#1C1B1F' size={20}  onClick={()=>navigate('/userdetail')}/></td>
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

export default HOC(TotalUsers)