import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import { auth } from './../../firebase/utils'

import Logo from "./../../assets/logo.png";

const Header = (props) => {
    const { currentUser } = props;
    return (
        <header className="header">
            <div className="wrap">
                <Link to="/">
                    <div className="logo">
                        <img src={Logo} alt="SimpleTut LOGO" />
                    </div>
                </Link>
                <div className="callToActions">

                    {currentUser && (
                        <ul>
                            <li>
                                <span onClick={() => auth.signOut()}>
                                    LOGOUT
                                </span>
                            </li>
                        </ul>
                    )}

                    {!currentUser && (
                        <ul>
                            <li>
                                <Link to="/registration">Register</Link>
                            </li>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </header>
    );
};

Header.defaultProps = {
    currentUser: null,
};

export default Header;
