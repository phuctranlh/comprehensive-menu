import React, {useState} from 'react';
import {Link} from "react-router-dom";
import BoundChildMenu from "./BoundChildMenu";

function ChildMenu(props) {

    // Get menu info from items
    const {gen_key, name, link, level, items = []} = props;

    //Check if the menu has children
    const isExpandable = items && items.length > 0;

    //Handle dropdown using react state
    const [dropdown, setDropdown] = useState(false);

    //Show menu when hovering
    const hoverMenu = (evt, lk) => {
        if (window.innerWidth >= 960) {
            setDropdown(true);
        }
    }

    //Hide menu when leaving
    const leaveMenu = (evt, lk) => {
        if (window.innerWidth >= 960) {
            setDropdown(false);
        }
    }

    //Handle menu without link
    let n_link = link;
    if (!link || typeof link !== 'string') {
        n_link = '';
    }
    ;

    //Add type of menu based on level
    let classN = '';
    if (level == 0) {
        classN += 'first-nav';
    } else {
        classN += 'child-nav';
    }

    if (isExpandable) {
        classN += ' menu-has-sub';
    }

    return (
        <>
            <li key={gen_key} className={classN}
                onMouseEnter={(event) => hoverMenu(event, n_link)}
                onMouseLeave={(event) => leaveMenu(event, n_link)}>
                {isExpandable ? <input type="checkbox" id={'menu-check' + level + '.' + gen_key}>
                </input> : null
                }
                <Link to={n_link}>
                    {name}
                    {isExpandable ? <label title="toggle menu" htmlFor={'menu-check' + level + '.' + gen_key}>
                        <i className="fa fa-caret-down"></i>
                    </label> : null}


                </Link>

                {dropdown && <BoundChildMenu sub_items={items}
                                             level={level}
                                             expand={isExpandable}>
                </BoundChildMenu>
                }

            </li>

        </>
    );
}

export default ChildMenu;