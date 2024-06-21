import React from 'react'
import './Navbar.css'

import img from '../../Img/img1.png'

import { RiArrowRightSLine } from "react-icons/ri";
import { BsFilterRight } from "react-icons/bs";


const Navbar = ({ toggleSidebar }) => {
    return (
        <>
            <div className='navbar'>
                <div className='navbar1'>
                    <div className='navbar2'>
                        <BsFilterRight onClick={toggleSidebar} size={25} color='#FFFFFF' />
                        <h6>Dashboard</h6>
                    </div>
                    <div className='navbar3'>
                        <div className='navbar4'>
                            <img src={img} alt="" />
                        </div>
                        <div className='navbar5'>
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