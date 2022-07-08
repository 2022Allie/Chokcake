import styled from "styled-components";
import chococake from "../img/pixelart/cake/chococake.png";
import blueberry from "../img/pixelart/cake/blueberry.png";
import strawberry from "../img/pixelart/cake/strawberry.png";
import mintchoco from "../img/pixelart/cake/mintchoco.png";
import React, { useState, useEffect } from "react";
import xcandle from "../img/pixelart/candle/xcandle.png";
import { Link } from "react-router-dom";
import ChooseCandle from "./Modals/candleModal.js";
import WriteLetter from "./Modals/writeLetterModal.js";
import axios from "axios";

const BASEURL = process.env.REACT_APP_BASE_URL;

function LetterWriterPage() {
    const [CakeNum, setCakeNum] = useState(1);
    const [candleMd, setCandleMd] = useState(false);
    const [letterMd, setLetterMd] = useState(false);
    const [maxCakeNum, setMaxNum] = useState(1);
    const [ownerMonth, setOwnerMonth] = useState(0);
    const [ownerDate, setOwnerDate] = useState(0);
    const [owner, setOwner] = useState("이름없음");
    const [cakeTheme, setCakeTheme] = useState(0);
    const cakie = [chococake, strawberry, blueberry, mintchoco];

    const right = () => {
        if (CakeNum === maxCakeNum) {
            return;
        }
        setCakeNum(CakeNum + 1);
    };

    const left = () => {
        if (CakeNum === 1) {
            return;
        }
        setCakeNum(CakeNum - 1);
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

    return (
        <Background>
            <LogoDiv>
                <Logo>'{owner}'님의 초'콕'케이크</Logo>
            </LogoDiv>
            <Section>
                <Birth>
                    탄생일 : {ownerMonth}월 {ownerDate}일
                </Birth>
                <Center>
                    <LeftButton
                        style={CakeNum === 1 ? { color: "#fff6ea" } : { color: "rgb(235, 217, 195)" }}
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
                        <Img src={cakie[cakeTheme]}></Img>
                    </Cake>
                    <RightButton
                        style={CakeNum === maxCakeNum ? { color: "#fff6ea" } : { color: "rgb(235, 217, 195)" }}
                        onClick={right}
                    >
                        ▶
                    </RightButton>
                </Center>
                <CakeNumber>
                    {CakeNum}/{maxCakeNum}
                </CakeNumber>
                <WriteLetterButton onClick={() => setCandleMd(!candleMd)}>초'콕'케이크에 초'콕'하기</WriteLetterButton>
                {candleMd ? (
                    <ChooseCandle
                        candleMd={candleMd}
                        setCandleMd={setCandleMd}
                        letterMd={letterMd}
                        setLetterMd={setLetterMd}
                    ></ChooseCandle>
                ) : null}
                {letterMd ? <WriteLetter letterMd={letterMd} setLetterMd={setLetterMd}></WriteLetter> : null}
                <Link to="/signup">
                    <MakeCake>나도 초‘콕’케이크 만들러가기</MakeCake>
                </Link>
            </Section>
        </Background>
    );
}

const Background = styled.div`
    width: 100%;
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

const Cake = styled.div`
    position: relative;
    > .candle {
        z-index: 1;
    }
`;

const Section = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 67px;
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
    position: relative;
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

const WriteLetterButton = styled.button`
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
    border: 0;
    outline: 0;
`;

const MakeCake = styled.button`
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
    bottom: 370px;
`;
const Xcandle3 = styled.img`
    position: absolute;
    width: 30px;
    height: 110px;
    left: 350px;
    bottom: 370px;
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

export default LetterWriterPage;
