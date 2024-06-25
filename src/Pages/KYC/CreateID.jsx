import React, { useState } from 'react'
import './KYC.css'
import HOC from '../../Components/HOC/HOC'
import { useNavigate } from 'react-router-dom';

import img from '../../Img/img3.png'
import { FiUpload } from "react-icons/fi";


const CreateID = () => {

    const navigate = useNavigate()

    return (
        <>
            <div className='userdetails'>
                <div className='userdetails1'>
                    <div className='userdetails2'>
                        <div className='userdetails3'>
                            <div className='userdetails4'>
                                <img src={img} alt="" />
                            </div>
                            <div className='userdetails5'>
                                <h6>User Name</h6>
                                <span>Completed  Profile</span>
                            </div>
                        </div>
                    </div>

                    <div className='userdetails7'>
                        <div className='userdetails8'>
                            <label htmlFor="">First Name</label>
                            <input type="text" placeholder='Jhon' />
                        </div>
                        <div className='userdetails8'>
                            <label htmlFor="">Last Name</label>
                            <input type="text" placeholder='Doe' />
                        </div>
                        <div className='userdetails8'>
                            <label htmlFor="">Email</label>
                            <input type="text" placeholder='jhondoe@gmail.com' />
                        </div>
                        <div className='userdetails8'>
                            <label htmlFor="">Aadhar Card Number</label>
                            <input type="text" placeholder='453875329' />
                        </div>
                        <div className='userdetails8'>
                            <label htmlFor="">Landline Number</label>
                            <input type="text" placeholder='Fianance, Support, management' />
                        </div>
                        <div className='userdetails8'>
                            <label htmlFor="">Phone Number</label>
                            <input type="text" placeholder='+91 453875329' />
                        </div>
                        <div className='userdetails8'>
                            <label htmlFor="">Residence Address</label>
                            <input type="text" placeholder='Jhon' />
                        </div>
                        <div className='userdetails8'>
                            <label htmlFor="">Shop Address</label>
                            <input type="text" placeholder='Noida' />
                        </div>
                        <div className='userdetails8'>
                            <label htmlFor="">District</label>
                            <input type="text" placeholder='Noida' />
                        </div>
                        <div className='userdetails8'>
                            <label htmlFor="">Pin Code</label>
                            <input type="text" placeholder='24548' />
                        </div>
                        <div className='userdetails8'>
                            <label htmlFor="">Country</label>
                            <input type="text" placeholder='india' />
                        </div>
                        <div className='userdetails8'>
                            <label htmlFor="">State</label>
                            <input type="text" placeholder='state' />
                        </div>
                        <div className='userdetails8'>
                            <label htmlFor="">Shop Turn Over</label>
                            <input type="text" placeholder='1to 10 lac drop down' />
                        </div>
                        <div className='userdetails8'>
                            <label htmlFor="">GST No.</label>
                            <input type="text" placeholder='563356' />
                        </div>
                        <div className='userdetails8'>
                            <label htmlFor="">Shop Name</label>
                            <input type="text" placeholder='shop name' />
                        </div>
                        <div className='userdetails8'>
                            <label htmlFor="">Shop Location</label>
                            <input type="text" placeholder='Shop Location' />
                        </div>
                        <div className='userdetails8'>
                            <label htmlFor="">PAN Number</label>
                            <input type="text" placeholder='PAN Number' />
                        </div>
                        <div className='userdetails8'>
                            <label htmlFor="">Total Staff</label>
                            <input type="text" placeholder='Total Staff' />
                        </div>
                    </div>

                    <div className='kyc2'>
                        <div className='kyc3'>
                            <label htmlFor="">Document Upload</label>
                            <div className='kyc4'>
                                <FiUpload color='#000000' size={20}/>
                                <p>Upload PDf</p>
                            </div>
                        </div>
                    </div>


                    <div className='kyc5'>
                        <button onClick={()=>navigate('/kyc')}>Back</button>
                        <button>Create ID</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(CreateID)