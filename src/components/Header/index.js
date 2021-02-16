import React from 'react'
import './styles.scss';
import { Link } from 'react-router-dom'

import Logo from './../../assets/logo.png';


const Header = props => {
    return (
        <header className="header">
            <div className="wrap">
                <Link to="/">
                    <div className="logo">
                        <img src={Logo} alt="SimpleTut LOGO" />
                    </div>
                </Link>
                <div className="callToActions">
                    <ul>
                        <li>
                            <Link to="/registration">
                                Register
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
        </header>
    )
};

export default Header;