import React, { Component } from 'react'
// import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap'
import {Link} from 'react-router-dom'

class MyNav extends Component {
    
    menuToggler = () => {
        let body = document.querySelector('body');
        body.classList.toggle('open');
    }

    render() {
        return(
            <header class="">
                <div className="container">
                    <nav className="nav">
                    <div onClick={this.menuToggler} className="menu-toggler">
                        <i className="fas fa-bars"></i>
                        <i className="fas fa-times"></i>
                    </div>
                    <Link className="brand" to='/'>Jokotoye Ademola</Link>
                    <ul className="nav-list">
                        <li className="nav-item">
                        <a className="nav-link" target='_blank' href="https://jokotoye-blog.s3.us-east-2.amazonaws.com/Jokotoye-Ademola-Akin.pdf">Resume<i class="fas fa-download ml-1"></i></a>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to='/signup'>Signup</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to='/login'>login</Link>
                        </li>
                    </ul>
                    </nav>
                </div>
            </header>
        )
    }
}

export default MyNav
