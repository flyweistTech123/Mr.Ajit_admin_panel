import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';


import { LuUser2 } from "react-icons/lu";
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { IoArrowForward } from "react-icons/io5";



const Verification = () => {
    const navigate = useNavigate()
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    return (
        <>
            <div className='login'>
                <div className='login1'>
                    <div className='login2'>
                        <div className='login33'>
                            <div className='login3'>
                                <LuUser2 color='#1B85F3' size={30} />
                            </div>
                        </div>

                        <div className='login4'>
                            <h5>Verify number or email</h5>
                            <p>You’ll receive a verification code on your registered mobile or email.</p>
                        </div>

                        <div className='login5'>
                            <input type="text" placeholder='Mobile' />
                            <p>or</p>
                            <input type="email" placeholder='Email' />
                        </div>
                        <div className='login9'>
                            <button onClick={()=>navigate('/verificationcode')}>NEXT  <IoArrowForward size={25}  /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Verification