import React from 'react';
import {MenuData} from "./MenuData";
import ChildMenu from "./ChildMenu";

function MenuComp(props) {
    return (
        <div className="nav-links">
            <ul>
                {/*Init menu with first level*/}
                {MenuData.map((item, index) => (
                    <ChildMenu {...item}
                               key={index}
                               gen_key={index}
                               level={0}
                               setMobileMenu={props.setMobileMenu}>
                    </ChildMenu>
                ))}
            </ul>
        </div>
    );
}

export default MenuComp;