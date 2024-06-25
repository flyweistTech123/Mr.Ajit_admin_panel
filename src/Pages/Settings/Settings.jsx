import React from 'react'
import './Settings.css'
import HOC from '../../Components/HOC/HOC'
import { useNavigate } from 'react-router-dom';

import { IoIosArrowBack } from "react-icons/io";
import { GiPlainCircle } from "react-icons/gi";



const Settings = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='totalusers'>
                <div className='totalusers1'>
                    <div className='totalusers4'>
                        <div className='totalusers5'>
                            <IoIosArrowBack color='#202224' size={25} onClick={() => navigate(-1)} />
                            <h6>Settings</h6>
                        </div>
                    </div>


                    <div className='setting'>
                        <div className='setting1'>
                            <div className='setting2'>
                                <div className='setting3'>
                                    <div className='setting4'>
                                        <GiPlainCircle size={10} color='#2E4658' />
                                        <h6>Voice call template for IVR</h6>
                                    </div>
                                    <p>Customize The IVR Message Variables:-</p>
                                </div>

                                <div className='setting5'>
                                    <div className='setting6'>
                                        <h6>Voice Call Template ( Text To Speech )</h6>
                                        <p>Convert text to speech effortlessly with our Voice Call Template, delivering clear and natural-sounding audio for seamless communication and enhanced user experiences.</p>
                                    </div>
                                    <div className='setting7'>
                                        <div className='setting8'>
                                            <label htmlFor=""><GiPlainCircle size={8} color='#71717A' />By Default</label>
                                            <input type="text" placeholder='Type Your Message Here....' />
                                        </div>
                                        <div className='setting8'>
                                            <label htmlFor=""><GiPlainCircle size={8} color='#71717A' />Select Call Message</label>
                                            <input type="text" placeholder='Type Your Message Here....' />
                                        </div>
                                    </div>

                                    <div className='setting9'>
                                        <button>Revert To Original</button>
                                    </div>
                                </div>
                            </div>
                            <div className='setting2'>
                                <div className='setting3'>
                                    <div className='setting4'>
                                        <GiPlainCircle size={10} color='#2E4658' />
                                        <h6>SMS</h6>
                                    </div>
                                    <p>Add your SMS Here</p>
                                </div>

                                <div className='setting5'>
                                    <div className='setting6'>
                                        <h6>SMS Template</h6>
                                        <p>Elevate SMS communication with our Text-to-Speech Template, transforming text messages into clear and natural audio for a seamless user experience.</p>
                                    </div>
                                    <div className='setting7'>
                                        <div className='setting8'>
                                            <textarea name="" id="" placeholder='Type Your Message Here....'></textarea>
                                        </div>
                                        <div className='setting8'>
                                            <textarea name="" id="" placeholder='Type Your Message Here....'></textarea>
                                        </div>
                                    </div>

                                    <div className='setting9'>
                                        <button>Revert To Original</button>
                                    </div>
                                </div>
                            </div>
                            <div className='setting2'>
                                <div className='setting3'>
                                    <div className='setting4'>
                                        <GiPlainCircle size={10} color='#2E4658' />
                                        <h6>Whatsapp Chat</h6>
                                    </div>
                                    <p>Add your Chat Here</p>
                                </div>

                                <div className='setting5'>
                                    <div className='setting6'>
                                        <h6>Whatsapp Chat Template</h6>
                                        <p>Revolutionize WhatsApp conversations with our Text-to-Speech Template, converting written messages to expressive audio for an immersive and user-friendly chat experience.</p>
                                    </div>
                                    <div className='setting10'>
                                        <textarea name="" id="" placeholder='Type Here Your Chat Process...'></textarea>
                                    </div>

                                    <div className='setting9'>
                                        <button>Save Chat Message</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div >
        </>
    )
}

export default HOC(Settings)