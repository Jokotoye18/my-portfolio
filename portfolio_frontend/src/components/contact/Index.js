import React from 'react'
import './Contact.css'
import { GrContact, GrContactInfo } from "react-icons/gr";

import Head from './Head'
import Contact from './Contact'
import Info from './Info'


const Index = () => {
    return (
        <section className='contact-container'>
            <div className='container'>
                <Head />
                <div className='row justify-content-between align-items-center'>
                    <div className='col-md-4'>
                        <Info />
                    </div>
                    <div className='col-md-8'>
                        <Contact />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Index
