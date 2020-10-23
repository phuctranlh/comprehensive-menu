import React, {useState} from 'react';
import '../../style/Header.css';
import {Link} from "react-router-dom";
import MenuComp from "./MenuComp";

function Header(props) {

    return (
        <>
            <div className={'responsive-header'}>
                <div className="header-container">

                    <div className="logo-container">
                        <Link to={'/'} className={'navbar-logo'}>
                            <div className="site-name">PHOOD TRAN</div>
                            <i className={'fa fa-adjust'}></i>
                        </Link>
                    </div>
                    <div className="nav-btn">

                        <MenuComp></MenuComp>
                        <div className="log-sign">
                            <a href="#" className="btn transparent">Sign in</a>
                            <a href="#" className="btn solid">Sign up</a>
                        </div>
                    </div>

                    {/*Menu for responsive screen*/}
                    <div className="hamburger-menu-container">
                        <div className="hamburger-menu">
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
