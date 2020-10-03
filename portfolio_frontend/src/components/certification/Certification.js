import React from 'react'
import './Certification.css'
import {FaCertificate} from 'react-icons/fa';
import { AiFillSafetyCertificate } from "react-icons/ai";
import Rotate from 'react-reveal/Rotate';
import Slide from 'react-reveal/Slide';

import Certificate from './Certificate'


const certificationData = [
    {
        icon: <FaCertificate />,
        name: 'Introduction to HTML5',
        organization: 'Coursera',
        URL: 'https://www.coursera.org/account/accomplishments/certificate/TU3WXRBNHJMQ'
    },
    {
        icon: <FaCertificate />,
        name: 'Introduction to CSS3',
        organization: 'Coursera',
        URL: 'https://www.coursera.org/account/accomplishments/certificate/VU4QCUJMCAUT'
    },
    {
        icon: <FaCertificate />,
        name: 'Interactivity with JavaScript',
        organization: 'Coursera',
        URL: 'https://www.coursera.org/account/accomplishments/certificate/RQWZT98GDWRX'
    },
    {
        icon: <FaCertificate />,
        name: 'Advanced Styling with Responsive Design',
        organization: 'Coursera',
        URL: 'https://www.coursera.org/account/accomplishments/certificate/9D4VNT2YC52B'
    },
]

const Certification = () => {

    const certificateList = certificationData.map(certificate => <Certificate key={certificate.name} certificate={certificate} />) 


    return (
        <div className='certification'>
        <div className='container'>
            <Rotate>
                <h2 className='certification-title'>Certification</h2>
            </Rotate>
            <Slide right>
                <div className='underline'>
                    <hr />
                </div>
            </Slide>
            <Slide left>
                <div className='text-center pb-5 fa-4x'>
                    <AiFillSafetyCertificate />
                </div>
            </Slide>
            <section className='row align-items-flex-start justify-content-between'>
                {certificateList}
            </section>
        </div>
        </div>
    )
}

export default Certification
