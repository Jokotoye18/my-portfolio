import React from 'react'

import { GrContact, GrContactInfo } from "react-icons/gr";

const Head = () => {
    return (
        <div className='head'>
            <h3 className=''>Get in Touch</h3>
            <p className=''>YOu may want to get in touch</p>
            <div className='row justify-content-center align-items-center'>
                <hr className='contact-line' />
                <GrContact  className=' contact-icon' />
                <hr className='contact-line' />
            </div>
        </div>
    )
}

export default Head
