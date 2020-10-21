import React from 'react';

function MenuComp(props) {
    return (
        <div className="nav-links">
            <ul>
                <li className="first-nav"><a href="/">Home </a></li>
                <li className="first-nav"><a href="/orders">Programming </a></li>
                <li className="first-nav menu-has-sub">
                    <input type="checkbox" id="menu-check0.2" />
                    <a href="/">Travel
                        <label title="toggle menu" htmlFor="menu-check0.2">
                            <i className="fa fa-caret-down" aria-hidden="true"></i>
                        </label>
                    </a>
                </li>
                <li className="first-nav"><a href="/reports">Life </a></li>
                <li className="first-nav menu-has-sub">
                    <input type="checkbox" id="menu-check0.4" />
                    <a href="/">About
                        <label title="toggle menu" htmlFor="menu-check0.4">
                            <i className="fa fa-caret-down" aria-hidden="true"></i>
                        </label>
                    </a>
                </li>
            </ul>
        </div>
);
}

export default MenuComp;