import {Link} from 'react-router-dom';
import React from 'react';
import './Nav.css';
import sirilogo from './sirilogo.png'
import NavDropdown from 'react-bootstrap/NavDropdown';

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
                <NavDropdown title="분석사례" className="nav_button">
                    <div className='dropbox'>
                        <div className='navdrop'><Link to={'consulting'} className='drop_font'>기업컨설팅</Link></div>
                        <div className='navdrop'><Link to={'technical'}  className='drop_font'>데이터 분석 기술</Link></div>
                    </div>
                </NavDropdown>      
            </div>
        </div>
    );
}

export default Nav;