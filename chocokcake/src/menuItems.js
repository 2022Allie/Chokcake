import { useState } from "react";
import styled from "styled-components";
import menuimg from "./img/Menu.png"
import MyAccount from "./myAccount";
import Developer from "./developer";

function MenuItems({ setClicked, clicked }) {
    const [account, setAccount] = useState(false);
    const [developer, setDeveloper] = useState(false);

    return (
        <>
            <Container display={clicked ? "flex" : "none"} >
                <MenuButton onClick={() => setClicked(false)}><img src={menuimg} /></MenuButton>
                <MenuItem onClick={() => setAccount(!account)}>내 계정</MenuItem>
                <MyAccount account={account}></MyAccount>
                <MenuItem onClick={() => setDeveloper(!developer)}>초'콕'케이크 개발자</MenuItem>
                <Developer developer={developer}></Developer>
                <MenuItem onClick={() => alert("아직 구현 중인 기능입니다.")}>계정 탈퇴</MenuItem>
            </Container>
        </>
    )
}


const Container = styled.div`
    padding-top: 130px;
    padding-left: 28px;
    background-color: #FFF6EA;
    position: absolute;
    top: 0;
    right: 0;
    width: 440px;
    height: calc(100% - 130px);
    display: ${props => props.display};
    flex-direction: column;
    gap: 250px;
    border-left:1px solid #AD8B73;
`

const MenuItem = styled.span`
    color: #AD8B73;
    font-size: 30px;
`

const MenuButton = styled.button`
    position: fixed;
    top: 27px;
    right: 54px;
    border: none;
    background-color: #FFF6EA;
`



export default MenuItems;