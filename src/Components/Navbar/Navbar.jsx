import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom';
import img from '../../Img/img1.png'

import { RiArrowRightSLine } from "react-icons/ri";
import { BsFilterRight } from "react-icons/bs";


const Navbar = ({ toggleSidebar }) => {
    const navigate = useNavigate()
    return (
        <>
            <div className='navbar111'>
                <div className='navbar1'>
                    <div className='navbar2'>
                        <BsFilterRight onClick={toggleSidebar} size={25} color='#00000' />
                        <h6>Dashboard</h6>
                    </div>
                    <div className='navbar3' onClick={()=>navigate('/profile')}>
                        <div className='navbar4'>
                            <img src={img} alt="" />
                        </div>
                        <div className='navbar5' >
                            <p>John Doe</p>
                            <h6>Admin <RiArrowRightSLine color='#39434F' size={20} /></h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar