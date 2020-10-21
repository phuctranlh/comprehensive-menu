import React from 'react';

function MenuComp(props) {
    return (
        <div className="nav-links">
            <ul>
                <li className="first-nav"><a href="/">Home </a></li>
                <li className="first-nav menu-has-sub">
                    <input type="checkbox" id="menu-check1.2" />
                    <a href="/programming">Programming
                        <label title="toggle menu" htmlFor="menu-check1.2">
                            <i className="fa fa-caret-down" aria-hidden="true"></i>
                        </label>
                    </a>
                    <div className="nav-dropdown">
                        <ul className="sub-menu">
                            <li className="child-nav"><a href="/programming/front-end"> Front-end </a></li>
                            <li className="child-nav menu-has-sub">
                                <input type="checkbox" id="menu-check2.2" />
                                <a href="/programming/back-end"> Back-end
                                    <label title="toggle menu" htmlFor="menu-check2.2">
                                        <i className="fa fa-caret-down" aria-hidden="true"></i>
                                    </label>
                                </a>
                                <div className="nav-dropdown child-dropdown">
                                    <ul className="sub-menu">
                                        <li className="child-nav"><a href="/programming/back-end/java"> Java </a></li>
                                        <li className="child-nav"><a href="/programming/back-end/spring"> Spring </a></li>
                                    </ul>
                                </div></li>
                        </ul>
                    </div>
                </li>
                <li className="first-nav"><a href="/travel">Travel </a></li>
                <li className="first-nav menu-has-sub">
                    <input type="checkbox" id="menu-check1.4" />
                    <a href="/life">Life
                        <label title="toggle menu" htmlFor="menu-check1.4">
                            <i className="fa fa-caret-down" aria-hidden="true"></i>
                        </label>
                    </a>
                    <div className="nav-dropdown">
                        <ul className="sub-menu">
                            <li className="child-nav menu-has-sub">
                                <input type="checkbox" id="menu-check2.4" />
                                <a href="/life/cooking"> Cooking
                                    <label title="toggle menu" htmlFor="menu-check2.4">
                                        <i className="fa fa-caret-down" aria-hidden="true"></i>
                                    </label>
                                </a>
                                <div className="nav-dropdown child-dropdown">
                                    <ul className="sub-menu">
                                        <li className="child-nav"><a href="/life/cooking/food"> Food </a></li>
                                        <li className="child-nav"><a href="/life/cooking/drink"> Drink </a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="child-nav"><a href="/life/tips"> Tips </a></li>
                            <li className="child-nav"><a href="/life/funny"> Funny </a></li>
                            <li className="child-nav"><a href="/life/stories"> Stories </a></li>
                        </ul>
                    </div>
                </li>
                <li className="first-nav"><a href="/">About </a></li>
            </ul>
        </div>
);
}

export default MenuComp;