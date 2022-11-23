import React from "react";
import MenuContainer from "../styled/MenuContainer/MenuContainer";

function Menu({ children, isMenuShown }) {
    return (
        <MenuContainer isMenuShown={isMenuShown}>
            {React.Children.map(children, (child) => (
                <MenuContainer.Item>{child}</MenuContainer.Item>
            ))}
        </MenuContainer>
    );
}

export default Menu;
