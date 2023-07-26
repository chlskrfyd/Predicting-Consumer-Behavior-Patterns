import {Link} from 'react-router-dom';
import React from 'react';
import './Nav.css';
import sirilogo from './sirilogo.png'

function Nav() {
    return(
        <div>
            <div className="nav_navbar">
                <Link className='navbarMenu' to={'/'}><img
              src={sirilogo}
              className="logo"
              alt="SIRI logo"/></Link>
                <Link className='navbarMenu' to={'/'}>홈</Link>
                <Link className='navbarMenu' to={'about'}>회사소개</Link>   
                <Link className='navbarMenu' to={'contact'}>분석사례</Link>          
            </div>
        </div>
    );
}

export default Nav;