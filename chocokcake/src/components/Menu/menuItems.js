import { useState } from "react";
import styled from "styled-components";
import menuXimg from "../../img/Icon/MenuX.png"
import MyAccount from "./myAccount";
import Developer from "./developer";
import Withdrawal from "./withdrawal";
import triangle1 from "../../img/Icon/triangle 1.svg";
import triangle2 from "../../img/Icon/triangle 2.svg";

function MenuItems({ setClicked, clicked }) {
    const [account, setAccount] = useState(false);
    const [developer, setDeveloper] = useState(false);
    const [withdrawal, setWithdrawal] = useState(false);
 
    return (
        <>
            <Container display={clicked ? "flex" : "none"} >
                <MenuButton onClick={() => setClicked(false)}><img src={menuXimg} /></MenuButton>

                <MenuItem onClick={() => setAccount(!account)}>내 계정 <img src={account ? triangle2 : triangle1} /></MenuItem>
                <MyAccount account={account}></MyAccount>

                <MenuItem onClick={() => setDeveloper(!developer)}>초'콕'케이크 개발자 <img src={developer ? triangle2 : triangle1} /></MenuItem>
                <Developer developer={developer}></Developer>

                <MenuItem onClick={() =>setWithdrawal(!withdrawal)}>계정 탈퇴  <img src={withdrawal ? triangle2 : triangle1} /></MenuItem>
                <Withdrawal withdrawal={withdrawal}></Withdrawal>
            </Container>
        </>
    )
}


const Container = styled.div`
    z-index: 2;
    padding-top: 130px;
    padding-left: 28px;
    background-color: #ECDBC5;
    position: absolute;
    top: 0;
    right: 0;
    width: 440px;
    height: calc(100% - 130px);
    display: ${props => props.display};
    flex-direction: column;
    gap: 230px;
    border-left:1px solid #AD8B73;
    border-radius: 15px;
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
    background-color: #ECDBC5;
    > img {
        width: 45px;
        height: 45px;
    }
`



export default MenuItems;