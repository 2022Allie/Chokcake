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
import SeeCandle from "./Modals/seeCandleModal";
import bsred from "../img/pixelart/candle/Basic/red.png";
import bsorange from "../img/pixelart/candle/Basic/orange.png";
import bsyellow from "../img/pixelart/candle/Basic/yellow.png";
import bsgreen from "../img/pixelart/candle/Basic/green.png";
import bsblue from "../img/pixelart/candle/Basic/blue.png";
import bsnavy from "../img/pixelart/candle/Basic/navy.png";
import bspurple from "../img/pixelart/candle/Basic/purple.png";
import bsbrown from "../img/pixelart/candle/Basic/brown.png";
import bsone from "../img/pixelart/candle/Number/one.png";
import bstwo from "../img/pixelart/candle/Number/two.png";
import bsthree from "../img/pixelart/candle/Number/three.png";
import bsfour from "../img/pixelart/candle/Number/four.png";
import bsfive from "../img/pixelart/candle/Number/five.png";
import bssix from "../img/pixelart/candle/Number/six.png";
import bsseven from "../img/pixelart/candle/Number/seven.png";
import bseight from "../img/pixelart/candle/Number/eight.png";
import bsnine from "../img/pixelart/candle/Number/nine.png";
import bszero from "../img/pixelart/candle/Number/zero.png";
import bsA from "../img/pixelart/candle/alphabet/candle-A.png";
import bsB from "../img/pixelart/candle/alphabet/candle-B.png";
import bsC from "../img/pixelart/candle/alphabet/candle-C.png";
import bsD from "../img/pixelart/candle/alphabet/candle-D.png";
import bsE from "../img/pixelart/candle/alphabet/candle-E.png";
import bsF from "../img/pixelart/candle/alphabet/candle-F.png";
import bsG from "../img/pixelart/candle/alphabet/candle-G.png";
import bsH from "../img/pixelart/candle/alphabet/candle-H.png";
import bsI from "../img/pixelart/candle/alphabet/candle-I.png";
import bsJ from "../img/pixelart/candle/alphabet/candle-J.png";
import bsK from "../img/pixelart/candle/alphabet/candle-K.png";
import bsL from "../img/pixelart/candle/alphabet/candle-L.png";
import bsM from "../img/pixelart/candle/alphabet/candle-M.png";
import bsN from "../img/pixelart/candle/alphabet/candle-N.png";
import bsO from "../img/pixelart/candle/alphabet/candle-O.png";
import bsP from "../img/pixelart/candle/alphabet/candle-P.png";
import bsQ from "../img/pixelart/candle/alphabet/candle-Q.png";
import bsR from "../img/pixelart/candle/alphabet/candle-R.png";
import bsS from "../img/pixelart/candle/alphabet/candle-S.png";
import bsT from "../img/pixelart/candle/alphabet/candle-T.png";
import bsU from "../img/pixelart/candle/alphabet/candle-U.png";
import bsV from "../img/pixelart/candle/alphabet/candle-V.png";
import bsW from "../img/pixelart/candle/alphabet/candle-W.png";
import bsX from "../img/pixelart/candle/alphabet/candle-X.png";
import bsY from "../img/pixelart/candle/alphabet/candle-Y.png";
import bsZ from "../img/pixelart/candle/alphabet/candle-Z.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

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
    const [candleSee, setCandleSee] = useState(false);
    const [cakeNum, setCakeNum] = useState(0);
    const [currentCandleNum, setCurrentCandleNum] = useState(0);
    const [accountId, setAccountId] = useState("");

    const [candleNum, setCandleNum] = useState({
        candle1: 0,
        candle2: 0,
        candle3: 0,
        candle4: 0,
        candle5: 0,
        candle6: 0,
        candle7: 0,
        candle8: 0,
    });

    let arr = Array.from({ length: maxCakeNum * 8 }, () => 0);

    const { candle1, candle2, candle3, candle4, candle5, candle6, candle7, candle8 } = candleNum;
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

    const data = useLocation().state.data;

    useEffect(() => {
        const getCakeInfo = () => {
            axios
                .get(`${BASEURL}/cake/mine`, {
                    headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
                })
                .then((result) => {
                    setOwner(result.data.cake_list[data].user_name);
                    setCakeTheme(result.data.cake_list[data].theme - 1);
                    let [y, m, d] = result.data.cake_list[data].birth_day.split("-");
                    setOwnerMonth(m);
                    setOwnerDate(d);
                    let cakeId = result.data.cake_list[data].id;
                    getCandleInfo(cakeId);
                })
                .catch(() => {
                    window.location.href = "/usermain";
                    alert("케이크가 없습니다 케이크를 생성하세요");
                });
        };
        getCakeInfo();
    }, [ownerCakeNum]);

    const getCandleInfo = (cakeId) => {
        axios
            .get(`${BASEURL}/cake/${cakeId}/candle`, {
                headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
            })
            .then((result) => {
                setMaxCakeNum(parseInt(result.data.candles.length / 8) + 1);
                setCakeNum(result.data.candles.length);
                for (let i = 0; i < result.data.candles.length; i++) {
                    arr[i] = result.data.candles[i].theme + 1;
                }
                const c = {
                    ...candleNum,
                    candle1: arr[(ownerCakeNum - 1) * 8],
                    candle2: arr[(ownerCakeNum - 1) * 8 + 1],
                    candle3: arr[(ownerCakeNum - 1) * 8 + 2],
                    candle4: arr[(ownerCakeNum - 1) * 8 + 3],
                    candle5: arr[(ownerCakeNum - 1) * 8 + 4],
                    candle6: arr[(ownerCakeNum - 1) * 8 + 5],
                    candle7: arr[(ownerCakeNum - 1) * 8 + 6],
                    candle8: arr[(ownerCakeNum - 1) * 8 + 7],
                };
                setCandleNum(c);
            });
    };

    useEffect(() => {
        const getUserInfo = () => {
            axios
                .get(`${BASEURL}/account/information`, {
                    headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
                })
                .then((result) => {
                    setAccountId(result.data.account_id);
                });
        };
        getUserInfo();
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

    const candle = [
        xcandle,
        bsred,
        bsorange,
        bsyellow,
        bsgreen,
        bsblue,
        bsnavy,
        bspurple,
        bsbrown,
        bsone,
        bstwo,
        bsthree,
        bsfour,
        bsfive,
        bssix,
        bsseven,
        bseight,
        bsnine,
        bszero,
        bsA,
        bsB,
        bsC,
        bsD,
        bsE,
        bsF,
        bsG,
        bsH,
        bsI,
        bsJ,
        bsK,
        bsL,
        bsM,
        bsN,
        bsO,
        bsP,
        bsQ,
        bsR,
        bsS,
        bsT,
        bsU,
        bsV,
        bsW,
        bsX,
        bsY,
        bsZ,
    ];

    return (
        <Background>
            <LogoDiv>
                <Link to="/usermain">
                    <Logo>초‘콕’케이크</Logo>
                </Link>
            </LogoDiv>
            <WriterDiv>
                <Writer onClick={ArrowBtn}>
                    편지 쓴 사람
                    <Arrow src={arrowClicked ? triangle2 : triangle1}></Arrow>
                </Writer>
            </WriterDiv>
            <WritersTab
                data={data}
                cakeNum={cakeNum}
                writerClicked={writerClicked}
                setWriterClicked={setWriterClicked}
            ></WritersTab>
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
                        <Xcandle1
                            className="candle"
                            src={candle[candle1]}
                            onClick={() => {
                                setCandleSee(true);
                                setCurrentCandleNum(1);
                            }}
                        ></Xcandle1>
                        <Xcandle2
                            className="candle"
                            src={candle[candle2]}
                            onClick={() => {
                                setCandleSee(true);
                                setCurrentCandleNum(2);
                            }}
                        ></Xcandle2>
                        <Xcandle3
                            className="candle"
                            src={candle[candle3]}
                            onClick={() => {
                                setCandleSee(true);
                                setCurrentCandleNum(3);
                            }}
                        ></Xcandle3>
                        <Xcandle4
                            className="candle"
                            src={candle[candle4]}
                            onClick={() => {
                                setCandleSee(true);
                                setCurrentCandleNum(4);
                            }}
                        ></Xcandle4>
                        <Xcandle5
                            className="candle"
                            src={candle[candle5]}
                            onClick={() => {
                                setCandleSee(true);
                                setCurrentCandleNum(5);
                            }}
                        ></Xcandle5>
                        <Xcandle6
                            className="candle"
                            src={candle[candle6]}
                            onClick={() => {
                                setCandleSee(true);
                                setCurrentCandleNum(6);
                            }}
                        ></Xcandle6>
                        <Xcandle7
                            className="candle"
                            src={candle[candle7]}
                            onClick={() => {
                                setCandleSee(true);
                                setCurrentCandleNum(7);
                            }}
                        ></Xcandle7>
                        <Xcandle8
                            className="candle"
                            src={candle[candle8]}
                            onClick={() => {
                                setCandleSee(true);
                                setCurrentCandleNum(8);
                            }}
                        ></Xcandle8>
                        <Img src={Cakie[cakeTheme]}></Img>
                    </Cake>
                    {candleSee ? (
                        <SeeCandle
                            data={data}
                            ownerCakeNum={ownerCakeNum}
                            currentCandleNum={currentCandleNum}
                            setCandleSee={setCandleSee}
                        ></SeeCandle>
                    ) : null}
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
            <Menu accountId={accountId} />
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
    min-width: 30px;
    height: 110px;
    top: 16px;
    left: 157px;
`;
const Xcandle2 = styled.img`
    position: absolute;
    min-width: 30px;
    height: 110px;
    left: 250px;
    bottom: 360px;
`;
const Xcandle3 = styled.img`
    position: absolute;
    min-width: 30px;
    height: 110px;
    left: 350px;
    bottom: 360px;
`;
const Xcandle4 = styled.img`
    position: absolute;
    min-width: 30px;
    height: 110px;
    right: 155px;
    top: 16px;
`;

const Xcandle5 = styled.img`
    position: absolute;
    min-width: 30px;
    height: 110px;
    left: 92px;
    top: 209px;
`;
const Xcandle6 = styled.img`
    position: absolute;
    min-width: 30px;
    height: 110px;
    top: 241px;
    left: 210px;
`;
const Xcandle7 = styled.img`
    position: absolute;
    min-width: 30px;
    height: 110px;
    top: 242px;
    left: 390px;
`;
const Xcandle8 = styled.img`
    position: absolute;
    min-width: 30px;
    height: 110px;
    left: 506px;
    top: 205px;
`;
