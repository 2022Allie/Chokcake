import styled from "styled-components";
import Menu from "./Menu/menu";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ChocoCake from "../img/pixelart/cake/chococake.png";
import Blueberry from "../img/pixelart/cake/blueberry.png";
import Strawberry from "../img/pixelart/cake/strawberry.png";
import MintChoco from "../img/pixelart/cake/mintchoco.png";

const BASEURL = process.env.REACT_APP_BASE_URL;

const UserMainPage = () => {
    const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);
    const [cakeTheme, setCakeTheme] = useState(0);
    const [ownerMonth, setOwnerMonth] = useState(0);
    const [ownerDate, setOwnerDate] = useState(0);
    const [accountId, setAccountId] = useState("");
    const Cakie = [ChocoCake, Strawberry, Blueberry, MintChoco];
    const [currentCakeNum, setCurrentCakeNum] = useState(0);

    useEffect(() => {
        const getCakeInfo = () => {
            axios
                .get(`${BASEURL}/account/information`, {
                    headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
                })
                .then((result) => {
                    let [y, m, d] = result.data.birth_day.split("-");
                    setOwnerMonth(m);
                    setOwnerDate(d);
                    setAccountId(result.data.account_id);
                    setCakeTheme(getRandom(0, 4));
                })
                .catch(() => {
                    console.log("error");
                });
        };
        getCakeInfo();
    }, []);

    useEffect(() => {
        const getCakeInfo = () => {
            axios
                .get(`${BASEURL}/cake/mine`, {
                    headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
                })
                .then((result) => {
                    setCurrentCakeNum(result.data.cake_list.length - 1);
                });
        };
        getCakeInfo();
    }, []);

    return (
        <>
            <Logo>초‘콕’케이크</Logo>
            <BirthWrapper>
                <Birth>
                    탄생일 : {ownerMonth}월 {ownerDate}일
                </Birth>
                <Body>
                    <InBody>
                        <Img1 src={Cakie[cakeTheme]}></Img1>
                        <Link to="/history">
                            <Button>히스토리</Button>
                        </Link>
                    </InBody>
                    <InBody>
                        <Img1 src={Cakie[cakeTheme]}></Img1>
                        <Link to="/letterOwner" state={{ data: currentCakeNum }}>
                            <Button>내 케이크</Button>
                        </Link>
                    </InBody>
                    <InBody>
                        <Img1 src={Cakie[cakeTheme]}></Img1>
                        <Link to="/choosepage">
                            <Button>케이크 생성</Button>
                        </Link>
                    </InBody>
                </Body>
            </BirthWrapper>
            <Menu accountId={accountId}></Menu>
        </>
    );
};

export default UserMainPage;

const Logo = styled.div`
    margin-left: 40px;
    margin-top: 27px;
    font-size: 40px;
    color: #ad8b73;
    font-family: "NeoDunggeunmo";
`;

const BirthWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const Birth = styled.div`
    font-size: 40px;
    margin-bottom: 170px;
`;

const Body = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1000px;
    height: 500px;
    background-color: #ecdbc5;
    border-radius: 30px;
    font-family: "NeoDunggeunmo";
`;

const InBody = styled.div`
    display: flex;
    justify-content: center;
    width: 290px;
    height: 400px;
    background-color: #fff6ea;
    margin: 15px;
    border-radius: 30px;
    &:hover {
        transform: scale(1.1);
        transition: 0.5s;
    }
`;

const Button = styled.button`
    width: 200px;
    height: 40px;
    background-color: #ad8b73;
    border-radius: 10px;
    border: 0;
    outline: 0;
    margin-top: 330px;
    font-size: 27px;
    font-family: "NeoDunggeunmo";
`;

const Img1 = styled.img`
    margin-top: 100px;
    position: absolute;
    width: 150px;
    height: 150px;
    transform-style: preserve-3d;
    transform: rotateY(0deg);
    &:hover {
        transform: rotateY(-180deg);
        transition: 0.5s;
    }
`;
