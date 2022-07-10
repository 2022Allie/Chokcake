import styled from "styled-components";
import ChocoCake from "../img/pixelart/cake/chococake.png";
import Blueberry from "../img/pixelart/cake/blueberry.png";
import Strawberry from "../img/pixelart/cake/strawberry.png";
import MintChoco from "../img/pixelart/cake/mintchoco.png";
import React, { useEffect, useState } from "react";
import xcandle from "../img/pixelart/candle/xcandle.png";
import WritersTab from "./WritersTab";
import Menu from "./Menu/menu";
import triangle1 from "../img/Icon/triangle 1.svg";
import triangle2 from "../img/Icon/triangle 2.svg";
import axios from "axios";

const BASEURL = process.env.REACT_APP_BASE_URL;

function LetterOwnerPage() {
    const [owner, setOwner] = useState("이름없음");
    const [ownerCakeNum, setOwnerCakeNum] = useState(1);
    const [writerClicked, setWriterClicked] = useState(false);
    const [arrowClicked, setArrowClicekd] = useState(false);
    const [maxCakeNum, setMaxCakeNum] = useState(1);
    const [cakeTheme, setCakeTheme] = useState(0);
    const [ownerMonth, setOwnerMonth] = useState(0);
    const [ownerDate, setOwnerDate] = useState(0);
    const Cakie = [ChocoCake, Strawberry, Blueberry, MintChoco];
    const toggle = () => {
        if (writerClicked === false) {
            setWriterClicked(true);
            return;
        }
        if (writerClicked === true) {
            setWriterClicked(false);
            return;
        }
    };

    const ArrowBtn = () => {
        setArrowClicekd(!arrowClicked);
        toggle();
    };

    useEffect(() => {
        const getCakeInfo = async () => {
            const result = await axios.get(`${BASEURL}/cake/mine`, {
                headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
            });
            setOwner(result.data.cake_list[0].user_name);
            setCakeTheme(result.data.cake_list[0].theme - 1);
            let [y, m, d] = result.data.cake_list[0].birth_day.split("-");
            setOwnerMonth(m);
            setOwnerDate(d);
        };
        getCakeInfo();
    }, []);

    const right = () => {
        if (ownerCakeNum === maxCakeNum) {
            return;
        }
        setOwnerCakeNum(ownerCakeNum + 1);
    };

    const left = () => {
        if (ownerCakeNum === 1) {
            return;
        }
        setOwnerCakeNum(ownerCakeNum - 1);
    };

    return (
        <Background>
            <LogoDiv>
                <Logo>초‘콕’케이크</Logo>
            </LogoDiv>
            <WriterDiv>
                <Writer onClick={ArrowBtn}>
                    편지 쓴 사람
                    <Arrow src={arrowClicked ? triangle2 : triangle1}></Arrow>
                </Writer>
            </WriterDiv>
            <WritersTab writerClicked={writerClicked} setWriterClicked={setWriterClicked}></WritersTab>
            <ImgDiv>
                <Birth>
                    탄생일 : {ownerMonth}월 {ownerDate}일
                </Birth>
                <Center>
                    <LeftButton
                        style={ownerCakeNum === 1 ? { color: "#fff6ea" } : { color: "rgb(235, 217, 195)" }}
                        onClick={left}
                    >
                        ▶
                    </LeftButton>
                    <Cake>
                        <Xcandle1 className="candle" src={xcandle}></Xcandle1>
                        <Xcandle2 className="candle" src={xcandle}></Xcandle2>
                        <Xcandle3 className="candle" src={xcandle}></Xcandle3>
                        <Xcandle4 className="candle" src={xcandle}></Xcandle4>
                        <Xcandle5 className="candle" src={xcandle}></Xcandle5>
                        <Xcandle6 className="candle" src={xcandle}></Xcandle6>
                        <Xcandle7 className="candle" src={xcandle}></Xcandle7>
                        <Xcandle8 className="candle" src={xcandle}></Xcandle8>
                        <Img src={Cakie[cakeTheme]}></Img>
                    </Cake>
                    <RightButton
                        style={ownerCakeNum === maxCakeNum ? { color: "#fff6ea" } : { color: "rgb(235, 217, 195)" }}
                        onClick={right}
                    >
                        ▶
                    </RightButton>
                </Center>
                <CakeNumber>
                    {ownerCakeNum}/{maxCakeNum}
                </CakeNumber>
                <CakeOwner>'{owner}'님의 초‘콕’케이크</CakeOwner>
                <SendCake>친구에게 초‘콕’케이크 나눠주기</SendCake>
            </ImgDiv>
            <Menu />
        </Background>
    );
}

export default LetterOwnerPage;

const Cake = styled.div`
    position: relative;
    > .candle {
        z-index: 1;
    }
`;

const Background = styled.div`
    width: 100vw;
    overflow-x: hidden;
    height: 100%;
    background-color: #fff6ea;
`;

const LogoDiv = styled.div`
    display: flex;
    justify-content: left;
`;

const Logo = styled.div`
    margin-left: 40px;
    margin-top: 27px;
    font-size: 40px;
    color: #ad8b73;
`;

const WriterDiv = styled.div`
    display: flex;
    justify-content: left;
`;

const Writer = styled.button`
    margin-left: 60px;
    margin-top: 27px;
    font-size: 30px;
    border: 0;
    outline: 0;
    background-color: #fff6ea;
    font-family: "NeoDunggeunmo";
    color: #ad8b73;
`;

const Arrow = styled.img`
    margin-left: 10px;
    font-size: 30px;
    border: 0;
    outline: 0;
    background-color: #fff6ea;
    color: #ad8b73;
`;

const ImgDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Birth = styled.div`
    font-size: 40px;
    margin-bottom: 15px;
`;

const Center = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Img = styled.img`
    width: 628px;
    height: 500px;
`;

const LeftButton = styled.button`
    width: 70px;
    height: 70px;
    font-size: 80px;
    font-family: "NeoDunggeunmo";
    background-color: #fff6ea;
    outline: none;
    border: none;
    transform: rotate(180deg);
    color: rgb(235, 217, 195);
    margin-top: 33px;
`;

const RightButton = styled.button`
    width: 70px;
    height: 70px;
    font-size: 80px;
    font-family: "NeoDunggeunmo";
    background-color: #fff6ea;
    color: rgb(235, 217, 195);
    outline: none;
    border: none;
`;

const CakeNumber = styled.div`
    margin-top: 10px;
    color: black;
    font-size: 40px;
    font-family: "NeoDunggeunmo";
`;

const CakeOwner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    font-size: 32px;
    background-color: #ad8b73;
    width: 600px;
    height: 50px;
    border-radius: 10px;
    font-family: "NeoDunggeunmo";
    margin-top: 10px;
`;

const SendCake = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 25px;
    border: 0;
    outline: 0;
    margin-top: 33px;
    background-color: #ecdbc5;
    border-radius: 10px;
    font-size: 18px;
    font-family: "NeoDunggeunmo";
`;

const Xcandle1 = styled.img`
    position: absolute;
    width: 30px;
    height: 110px;
    top: 16px;
    left: 157px;
`;
const Xcandle2 = styled.img`
    position: absolute;
    width: 30px;
    height: 110px;
    left: 250px;
    bottom: 360px;
`;
const Xcandle3 = styled.img`
    position: absolute;
    width: 30px;
    height: 110px;
    left: 350px;
    bottom: 360px;
`;
const Xcandle4 = styled.img`
    position: absolute;
    width: 30px;
    height: 110px;
    right: 155px;
    top: 16px;
`;

const Xcandle5 = styled.img`
    position: absolute;
    width: 30px;
    height: 110px;
    left: 92px;
    top: 209px;
`;
const Xcandle6 = styled.img`
    position: absolute;
    width: 30px;
    height: 110px;
    top: 241px;
    left: 210px;
`;
const Xcandle7 = styled.img`
    position: absolute;
    width: 30px;
    height: 110px;
    top: 242px;
    left: 390px;
`;
const Xcandle8 = styled.img`
    position: absolute;
    width: 30px;
    height: 110px;
    left: 506px;
    top: 205px;
`;
