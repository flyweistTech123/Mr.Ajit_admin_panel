import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';


import { LuUser2 } from "react-icons/lu";
import { IoArrowForward } from "react-icons/io5";



const Verificationcode = () => {
    const navigate = useNavigate()
    const [otp, setOtp] = useState(new Array(6).fill(""));

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        // Focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    const handleKeyDown = (event, index) => {
        if (event.key === "Backspace" && !otp[index] && index > 0) {
            event.preventDefault();
            event.target.previousSibling.focus();
        }
    };

    const handleSubmit = () => {
        const otpCode = otp.join("");
        console.log("OTP entered: ", otpCode);
    };
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
                            <h5>Send verification code</h5>
                            <p>enter verification code sent to your registered mobile or email.</p>
                        </div>

                        <div className='otp-container'>
                            {otp.map((data, index) => {
                                return (
                                    <input
                                        className="otp-input"
                                        type="text"
                                        name="otp"
                                        maxLength="1"
                                        key={index}
                                        value={data}
                                        placeholder='0'
                                        onChange={e => handleChange(e.target, index)}
                                        onKeyDown={e => handleKeyDown(e, index)}
                                        onFocus={e => e.target.select()}
                                    />
                                );
                            })}
                        </div>
                        <div className='login9'>
                            <button onClick={()=>navigate('/')}>NEXT  <IoArrowForward size={25}  /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Verificationcode