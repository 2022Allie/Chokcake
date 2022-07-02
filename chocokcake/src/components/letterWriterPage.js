import styled from "styled-components";
import chococake from "../img/chococake.png";
import React, { useState } from "react";
import xcandle from "../img/xcandle2.png";
import { Link } from "react-router-dom";

function LetterWriterPage() {
    const [CakeNum, setCakeNum] = useState(1);

    const right = () => {
        if (CakeNum === 3) {
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

    return (
        <Background>
            <LogoDiv>
                <Logo>'윤지'님의 초'콕'케이크</Logo>
            </LogoDiv>
            <Section>
                <Birth>탄생일 : 7월 19일</Birth>
                <Center>
                    <LeftButton onClick={left}>▶</LeftButton>
                    <Cake>
                        <Xcandle1 className="candle" src={xcandle}></Xcandle1>
                        <Xcandle2 className="candle" src={xcandle}></Xcandle2>
                        <Xcandle3 className="candle" src={xcandle}></Xcandle3>
                        <Xcandle4 className="candle" src={xcandle}></Xcandle4>
                        <Xcandle5 className="candle" src={xcandle}></Xcandle5>
                        <Xcandle6 className="candle" src={xcandle}></Xcandle6>
                        <Xcandle7 className="candle" src={xcandle}></Xcandle7>
                        <Xcandle8 className="candle" src={xcandle}></Xcandle8>
                        <Img src={chococake}></Img>
                    </Cake>
                    <RightButton onClick={right}>▶</RightButton>
                </Center>
                <CakeNumber>{CakeNum}/3</CakeNumber>
                <WriteLetterButton>초'콕'케이크에 초'콕'하기</WriteLetterButton>
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

const WriteLetterButton = styled.div`
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
    left: 150px;
`;
const Xcandle2 = styled.img`
    position: absolute;
    width: 30px;
    height: 110px;
    left: 256px;
    bottom: 410px;
`;
const Xcandle3 = styled.img`
    position: absolute;
    width: 30px;
    height: 110px;
    left: 382px;
    bottom: 410px;
`;
const Xcandle4 = styled.img`
    position: absolute;
    width: 30px;
    height: 110px;
    right: 144px;
    top: 16px;
`;

const Xcandle5 = styled.img`
    position: absolute;
    width: 30px;
    height: 110px;
    left: 94px;
    top: 205px;
`;
const Xcandle6 = styled.img`
    position: absolute;
    width: 30px;
    height: 110px;
    top: 228px;
    left: 210px;
`;
const Xcandle7 = styled.img`
    position: absolute;
    width: 30px;
    height: 110px;
    top: 228px;
    left: 390px;
`;
const Xcandle8 = styled.img`
    position: absolute;
    width: 30px;
    height: 110px;
    left: 521px;
    top: 205px;
`;


export default LetterWriterPage;