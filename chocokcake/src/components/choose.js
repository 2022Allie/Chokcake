import styled from "styled-components";
import ChocoCake from "../img/pixelart/cake/chococake.png";
import Blueberry from "../img/pixelart/cake/blueberry.png";
import Strawberry from "../img/pixelart/cake/strawberry.png";
import MintChoco from "../img/pixelart/cake/mintchoco.png";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BASEURL = process.env.REACT_APP_BASE_URL;

function ChoosePage() {
    const [number, setNumber] = useState(1);
    const Img = [ChocoCake, Strawberry, Blueberry, MintChoco];

    useEffect(() => {
        const getCakeInfo = async () => {
            const result = await axios.get(`${BASEURL}/cake/mine`, {
                headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
            });
            if (result.data.cake_list[0].theme !== "") window.location.href = "/letterOwner";
        };
        getCakeInfo();
    }, []);

    const right = () => {
        if (number === 4) {
            return;
        }
        setNumber(number + 1);
    };

    const left = () => {
        if (number === 1) {
            return;
        }
        setNumber(number - 1);
    };

    const cakeTheme = async () => {
        await axios.post(
            `${BASEURL}/cake`,
            {
                theme: number,
            },
            { headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` } }
        );
    };

    return (
        <Background>
            <LogoDiv>
                <Logo>초‘콕’케이크</Logo>
            </LogoDiv>
            <ImgDiv>
                <SendCake>케이크 만들기</SendCake>
                <Center>
                    <LeftButton
                        style={number === 1 ? { color: "#fff6ea" } : { color: "rgb(235, 217, 195)" }}
                        onClick={left}
                    >
                        ▶
                    </LeftButton>
                    <Cake src={Img[number - 1]} number={number}></Cake>
                    <RightButton
                        style={number === 4 ? { color: "#fff6ea" } : { color: "rgb(235, 217, 195)" }}
                        onClick={right}
                    >
                        ▶
                    </RightButton>
                </Center>
                <CakeNumber>{number}/4</CakeNumber>
                <Link to="/letterOwner" style={{ textDecoration: "none" }}>
                    <Button onClick={cakeTheme} number={number}>
                        이 케이크로 하기
                    </Button>
                </Link>
            </ImgDiv>
        </Background>
    );
}

export default ChoosePage;

const Background = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fff6ea;
`;

const ImgDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Cake = styled.img`
    width: 628px;
    height: 500px;
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

const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
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

const SendCake = styled.div`
    font-size: 30px;
    margin-bottom: 20px;
    margin-top: 30px;
    color: #000000;
`;

const CakeNumber = styled.div`
    margin-top: 10px;
    color: black;
    font-size: 40px;
    font-family: "NeoDunggeunmo";
    margin-bottom: 30px;
`;

const Button = styled.button`
    background-color: #ad8b73;
    outline: 0;
    border: 0;
    border-radius: 10px;
    height: 50px;
    width: 318px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000000;
    font-size: 30px;
    font-family: "NeoDunggeunmo";
`;
