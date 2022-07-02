import { useState } from "react"
import styled from "styled-components"
import menuimg from "../../img/Menu.png"
import MenuItems from "./menuItems"

function Menu() {
    const [clicked, setClicked] = useState(false);

    return (
        <>
            <MenuButton onClick={() => setClicked(true)}><img src={menuimg} /></MenuButton>
            <MenuItems clicked={clicked} setClicked={setClicked} />
        </>
    )
}

const MenuButton = styled.button`
    position: absolute;
    top: 27px;
    right: 54px;
    border: none;
    background-color: #FFF6EA; 
    > img {
        width: 45px;
        height: 45px;
    }
`

export default Menu;