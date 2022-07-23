import { useState } from "react";
import styled from "styled-components";
import menuimg from "../../img/Icon/Menu.png";
import MenuItems from "./menuItems";

function Menu({ accountId }) {
    const [clicked, setClicked] = useState(false);
    const [accountId1, setAccountId1] = useState("");

    return (
        <>
            <MenuButton onClick={() => setClicked(true)}>
                <img src={menuimg} />
            </MenuButton>
            <MenuItems accountId={accountId} clicked={clicked} setClicked={setClicked} />
        </>
    );
}

const MenuButton = styled.button`
    position: absolute;
    top: 27px;
    right: 54px;
    border: none;
    background-color: #fff6ea;
    > img {
        width: 45px;
        height: 45px;
    }
`;

export default Menu;
