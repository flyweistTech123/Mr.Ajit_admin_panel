import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';


import { LuUser2 } from "react-icons/lu";
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { IoArrowForward } from "react-icons/io5";



const Newpassword = () => {
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
                            <h5>Set new password</h5>
                            <p>set a strong password with a combination of alphabets, numbers and symbold.</p>
                        </div>

                        <div className='login5'>
                            <div style={{ position: 'relative' }}>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder='New password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <span
                                    onClick={() => setShowPassword(!showPassword)}
                                    style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
                                >
                                    {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                                </span>
                            </div>
                            <div style={{ position: 'relative' }}>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder='Confirm password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <span
                                    onClick={() => setShowPassword(!showPassword)}
                                    style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
                                >
                                    {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                                </span>
                            </div>
                        </div>
                        <div className='login9'>
                            <button  onClick={()=>navigate('/verification')}>NEXT  <IoArrowForward size={25} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Newpassword