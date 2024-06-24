import React from 'react'
import HOC from '../../Components/HOC/HOC'
import { useNavigate } from 'react-router-dom';

import img from '../../Img/img2.png'


import { IoIosArrowBack } from "react-icons/io";
import { LuUpload } from "react-icons/lu";
import { MdRemoveRedEye } from "react-icons/md";

const PushNotification = () => {
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
                            <h6>Push notification</h6>
                        </div>
                        <div className='notification'>
                            <div className='notification1'>
                                <p>Notification List</p>
                            </div>
                        </div>
                    </div>


                    <div className='notification2'>
                        <div className='notification3'>
                            <div className='notification4'>
                                <label htmlFor="">Title</label>
                                <input type="text" placeholder='write title' />
                            </div>
                            <div className='notification4'>
                                <label htmlFor="">Notification Banner</label>
                                <div className='notification5'>
                                    <LuUpload  size={50} color='#7F898B'/>
                                    <p>upload notification banner image</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div >
        </>
    )
}

export default HOC(PushNotification)