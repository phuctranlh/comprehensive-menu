import React from 'react';
import ChildMenu from "./ChildMenu";

// Immediate component to recursive call
function BoundChildMenu(props) {

    const {sub_items} = props;

    let classN = 'nav-dropdown';
    if (props.level > 0) {
        classN += ' child-dropdown';
    }

    return (
        props.expand ? (
            <div className={classN}>
                <ul className={'sub-menu'}>
                    {sub_items.map((item, index) => (
                        <ChildMenu {...item} key={index}
                                   gen_key={index}
                                   level={props.level + 1}>
                        </ChildMenu>
                    ))}
                </ul>
            </div>
        ) : null
    );
}

export default BoundChildMenu;