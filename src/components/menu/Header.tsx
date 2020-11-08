import React, {useState} from 'react';
import '../../style/Header.css';
import {Link} from "react-router-dom";
import MenuComp from "./MenuComp";

function Header(props) {

    const [mobiMenu, setMobiMenu] = useState(false);

    const setMobileMenu = (stt) => {
        setMobiMenu(stt);
    }

    const clickMobileMenu = () => {
        setMobiMenu(!mobiMenu);
    }

    return (
        <>
            <div className={'responsive-header'}>
                <div className={'header-container'}>

                    <div className={'logo-container'}>
                        <Link to={'/'} className={'navbar-logo'}>
                            <div className={'site-name'}>PHOOD TRAN</div>
                            <i className={'fa fa-adjust'}></i>
                        </Link>
                    </div>

                    {
                        (mobiMenu || window.innerWidth >= 960) && <div className={'nav-btn'}>
                            <MenuComp setMobileMenu={setMobileMenu}></MenuComp>
                            <div className={'log-sign'}>
                                <a href="sign-in" className={'btn transparent'}>Sign in</a>
                                <a href="sign-up" className={'btn solid'}>Sign up</a>
                            </div>
                        </div>
                    }

                    {/*Menu open button for responsive screen*/}
                    <div className={'hamburger-menu-container'}>
                        <div className={'hamburger-menu'}
                             onClick={clickMobileMenu}>
                            {mobiMenu ? <i className={'fa fa-times'}></i> : <i className={'fa fa-bars'}></i>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
