import React, {useState} from 'react';
import {Link} from "react-router-dom";
import BoundChildMenu from "./BoundChildMenu";

function ChildMenu(props) {

    // Get menu info from items
    const {gen_key, name, link, level, items = []} = props;

    const isExpandable = items && items.length > 0;

    //Handle menu without link
    let n_link = link;
    if (!link || typeof link !== 'string') {
        n_link = '';
    };

    //Add type of menu based on level
    let classN = '';
    if(level == 0) {
        classN += 'first-nav';
    } else {
        classN += 'child-nav';
    }

    if(isExpandable) {
        classN += ' menu-has-sub';
    }

    return (
        <>
            <li key={gen_key} className={classN}>

                {isExpandable? <input type="checkbox" id={'menu-check' + level + '.' + gen_key}/> : null}
                <Link to={n_link}>
                    {name}
                    {isExpandable? <label title="toggle menu" htmlFor={'menu-check' + level + '.' + gen_key}>
                        <i className="fa fa-caret-down"></i>
                    </label> : null}


                </Link>

                <BoundChildMenu sub_items={items}
                                level={level}
                                expand={isExpandable}>
                </BoundChildMenu>

            </li>

        </>
    );
}

export default ChildMenu;