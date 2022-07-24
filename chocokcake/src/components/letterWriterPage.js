import styled from "styled-components";
import chococake from "../img/pixelart/cake/chococake.png";
import blueberry from "../img/pixelart/cake/blueberry.png";
import strawberry from "../img/pixelart/cake/strawberry.png";
import mintchoco from "../img/pixelart/cake/mintchoco.png";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ChooseCandle from "./Modals/candleModal.js";
import WriteLetter from "./Modals/writeLetterModal.js";
import axios from "axios";
import xcandle from "../img/pixelart/candle/xcandle.png";
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

const BASEURL = process.env.REACT_APP_BASE_URL;

function LetterWriterPage() {
    const [CakeNum, setCakeNum] = useState(1);
    const [candleMd, setCandleMd] = useState(false);
    const [letterMd, setLetterMd] = useState(false);
    const [maxCakeNum, setMaxCakeNum] = useState(1);
    const [ownerMonth, setOwnerMonth] = useState(0);
    const [ownerDate, setOwnerDate] = useState(0);
    const [owner, setOwner] = useState("이름없음");
    const [cakeTheme, setCakeTheme] = useState(0);
    const [cakeId, setCakeId] = useState("");
    const [candleTheme, setCandleTheme] = useState(0);
    const cakie = [chococake, strawberry, blueberry, mintchoco];
    const [cakeLength, setCakeLength] = useState(0);
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

    const { id } = useParams();

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

    const { candle1, candle2, candle3, candle4, candle5, candle6, candle7, candle8 } = candleNum;

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
        const getCakeInfo = () => {
            axios.get(`${BASEURL}/cake/${id}`).then((result) => {
                console.log(result.data);
                setOwner(result.data.user_name);
                setCakeTheme(result.data.theme - 1);
                setCakeId(result.data.id);
                let [y, m, d] = result.data.birth_day.split("-");
                setOwnerMonth(m);
                setOwnerDate(d);
                let cakeId = id;
                getCandleInfo(cakeId);
            });
        };
        getCakeInfo();
    }, [CakeNum]);

    const getCandleInfo = (cakeId) => {
        axios.get(`${BASEURL}/cake/${cakeId}/candle`).then((result) => {
            console.log(result);
            setMaxCakeNum(parseInt(result.data.candles.length / 8) + 1);
            setCakeLength(result.data.candles.length);
            for (let i = 0; i < result.data.candles.length; i++) {
                arr[i] = result.data.candles[i].theme + 1;
            }
            const c = {
                ...candleNum,
                candle1: arr[(CakeNum - 1) * 8],
                candle2: arr[(CakeNum - 1) * 8 + 1],
                candle3: arr[(CakeNum - 1) * 8 + 2],
                candle4: arr[(CakeNum - 1) * 8 + 3],
                candle5: arr[(CakeNum - 1) * 8 + 4],
                candle6: arr[(CakeNum - 1) * 8 + 5],
                candle7: arr[(CakeNum - 1) * 8 + 6],
                candle8: arr[(CakeNum - 1) * 8 + 7],
            };
            setCandleNum(c);
        });
    };

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
                        <Xcandle1 className="candle1" src={candle[candle1]}></Xcandle1>
                        <Xcandle2 className="candle2" src={candle[candle2]}></Xcandle2>
                        <Xcandle3 className="candle3" src={candle[candle3]}></Xcandle3>
                        <Xcandle4 className="candle4" src={candle[candle4]}></Xcandle4>
                        <Xcandle5 className="candle5" src={candle[candle5]}></Xcandle5>
                        <Xcandle6 className="candle6" src={candle[candle6]}></Xcandle6>
                        <Xcandle7 className="candle7" src={candle[candle7]}></Xcandle7>
                        <Xcandle8 className="candle8" src={candle[candle8]}></Xcandle8>
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
                <WriteLetterButton cakeId={cakeId} cakeTheme={cakeTheme} onClick={() => setCandleMd(!candleMd)}>
                    초'콕'케이크에 초'콕'하기
                </WriteLetterButton>
                {candleMd ? (
                    <ChooseCandle
                        candleMd={candleMd}
                        setCandleMd={setCandleMd}
                        letterMd={letterMd}
                        setLetterMd={setLetterMd}
                        setCandleTheme={setCandleTheme}
                        candleTheme={candleTheme}
                    ></ChooseCandle>
                ) : null}
                {letterMd ? (
                    <WriteLetter candleTheme={candleTheme} letterMd={letterMd} setLetterMd={setLetterMd}></WriteLetter>
                ) : null}
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
    z-index: 99;
    left: 157px;
`;
const Xcandle2 = styled.img`
    position: absolute;
    width: 30px;
    height: 110px;
    left: 250px;
    z-index: 99;
    bottom: 370px;
`;
const Xcandle3 = styled.img`
    position: absolute;
    width: 30px;
    height: 110px;
    left: 350px;
    z-index: 99;
    bottom: 370px;
`;
const Xcandle4 = styled.img`
    position: absolute;
    width: 30px;
    height: 110px;
    right: 155px;
    z-index: 99;
    top: 16px;
`;

const Xcandle5 = styled.img`
    position: absolute;
    width: 30px;
    height: 110px;
    left: 92px;
    z-index: 99;
    top: 209px;
`;
const Xcandle6 = styled.img`
    position: absolute;
    width: 30px;
    height: 110px;
    top: 241px;
    z-index: 99;
    left: 210px;
`;
const Xcandle7 = styled.img`
    position: absolute;
    width: 30px;
    height: 110px;
    top: 242px;
    z-index: 99;
    left: 390px;
`;
const Xcandle8 = styled.img`
    position: absolute;
    width: 30px;
    height: 110px;
    left: 506px;
    top: 205px;
    z-index: 99;
`;

export default LetterWriterPage;
