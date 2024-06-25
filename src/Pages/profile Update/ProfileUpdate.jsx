import React from 'react'
import './ProfileUpdate.css'
import HOC from '../../Components/HOC/HOC'
import { useNavigate } from 'react-router-dom';

import { IoIosArrowBack } from "react-icons/io";

import img from '../../Img/img8.png'


const ProfileUpdate = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='totalusers'>
                <div className='totalusers1'>
                    <div className='totalusers4'>
                        <div className='totalusers5'>
                            <IoIosArrowBack color='#202224' size={25} onClick={() => navigate(-1)} />
                            <h6>Profile Update</h6>
                        </div>
                    </div>


                    <div className='profileupdate'>
                        <div className='profileupdate1'>
                            <div className='profileupdate2'>
                                <div className='profileupdate3'>
                                    <label htmlFor="">Name</label>
                                    <label htmlFor="">Email</label>
                                    <label htmlFor="">Your Photo <br/> <p>This photo will be displayed on your profile</p></label>
                                    <label htmlFor="">Role</label>
                                    <label htmlFor="">Country</label>
                                </div>

                                <div className='profileupdate4'>
                                    <div className='profileupdate5'>
                                        <input type="text" placeholder='John' />
                                        <input type="text" placeholder='Deo' />
                                    </div>
                                    <input type="email" placeholder='johndeo@gmail.com' />

                                    <div className='profileupdate6'>
                                        <div className='profileupdate7'>
                                            <img src={img} alt="" />
                                        </div>
                                        <div className='profileupdate8'>
                                            <div className='profileupdate9'>
                                                <p>Click to upload or <span>drag & drop</span><br />
                                                    (SVG, PNG, JPG and JPEG)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <input type="text" placeholder='Staff' />
                                    <input type="text" placeholder='India' />
                                </div>
                            </div>
                        </div>

                        <div className='kyc5'>
                            <button onClick={() => navigate('/dashboard')}>Cancel</button>
                            <button>Save Changes</button>
                        </div>
                    </div>

                </div>
            </div >
        </>
    )
}

export default HOC(ProfileUpdate)