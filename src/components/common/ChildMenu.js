import React from "react";
import { NavLink } from "react-router-dom";

function ChildMenu({ styleName, path, menuItem }) {
    const children = menuItem.children;
    if (!children) return null;

    const onClick = () => {};
    return (
        <div className={`${styleName}__childMenu`}>
            {children.map((item) => (
                <NavLink
                    key={item.path}
                    to={menuItem.path + item.path}
                    activeClassName="active"
                    onClick={onClick}
                >
                    {styleName === "sideNav" && "▶ "}
                    {item.name}
                </NavLink>
            ))}
        </div>
    );
}

export default React.memo(ChildMenu);
