import React from 'react'
import {Link} from 'react-router-dom'
import Zoom from 'react-reveal/Zoom';


const Certificate = ({ certificate }) => {

    const {icon, name, organization, URL} = certificate
    console.log(URL);

    return (
        <Zoom>
            <div className='col-md-6 col-lg-4 certificate'>
                <span className='icon fa-2x' role='img'>{icon}</span>
                <p><strong>{name}</strong></p>
                <p><u>Organization: {organization}</u></p>
                <Link className='certificate-url' to={{pathname: `${URL}` }} target='_blank' rel="noopener noreferrer" >{URL}</Link>
            </div>
        </Zoom>
    )
}

export default Certificate
