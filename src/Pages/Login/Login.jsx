import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';



import { LuUser2 } from "react-icons/lu";
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { IoArrowForward } from "react-icons/io5";



const Login = () => {
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
                            <h5>Login to KRT Finance admin</h5>
                            <p>Welcome! Please enter your information below and get started.</p>
                        </div>

                        <div className='login5'>
                            <input type="email" placeholder='Email' />
                            <div style={{ position: 'relative' }}>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder='Password'
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
                        <div className='login6'>
                            <div className='login7'>
                                <input type="checkbox" />
                                <label htmlFor="">Remember me</label>
                            </div>
                            <div className='login8' onClick={()=>navigate('/newpassword')}>
                                <p>Forgot Password?</p>
                            </div>
                        </div>
                        <div className='login9'>
                            <button onClick={()=>navigate('/dashboard')}>LOGIN  <IoArrowForward  size={25}/></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login