import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { signOutUserStart } from './../../redux/User/user.actions'
import "./styles.scss";
import { Link } from "react-router-dom";


import Logo from "./../../assets/logo.png";

const mapState = ({ user }) => ({
    currentUser: user.currentUser
})

const Header = (props) => {
    const dispatch = useDispatch();
    const { currentUser } = useSelector(mapState);

    const signOut = () => {
        dispatch(signOutUserStart())
    }

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
                                <Link to="/dashboard">My Acoount</Link>
                            </li>
                            <li>
                                <span onClick={() => signOut()}>
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
