import React from 'react'
import './Notifications.css'
import HOC from '../../Components/HOC/HOC'
import { useNavigate } from 'react-router-dom';
import img from '../../Img/img2.png'


import { IoIosArrowBack } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { MdRemoveRedEye } from "react-icons/md";


const Notifications = () => {
    const navigate = useNavigate()
    const tabledata = [
        {
            id: 1,
            NotificationTitle: 'Notififation Title',
            Banner: img,
            PublishDate: "04/05/2024",
            EndDate: "04/05/2024",
        },
        {
            id: 2,
            NotificationTitle: 'Notififation Title',
            Banner: img,
            PublishDate: "04/05/2024",
            EndDate: "04/05/2024",
        },
        {
            id: 3,
            NotificationTitle: 'Notififation Title',
            Banner: img,
            PublishDate: "04/05/2024",
            EndDate: "04/05/2024",
        },
        {
            id: 4,
            NotificationTitle: 'Notififation Title',
            Banner: img,
            PublishDate: "04/05/2024",
            EndDate: "04/05/2024",
        }
    ]
    return (
        <>
            <div className='totalusers'>
                <div className='totalusers1'>
                    <div className='totalusers4'>
                        <div className='totalusers5'>
                            <IoIosArrowBack color='#202224' size={25} onClick={() => navigate(-1)} />
                            <h6>Notification List</h6>
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
                                        <th>Notification Title</th>
                                        <th>Banner</th>
                                        <th>Publish Date</th>
                                        <th>End Date</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tabledata.map((data) => (
                                        <tr key={data.id}>
                                            <td>{data.NotificationTitle}</td>
                                            <td> <img src={data.Banner} alt="" /></td>
                                            <td>{data.PublishDate}</td>
                                            <td>{data.EndDate}</td>
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

export default HOC(Notifications)