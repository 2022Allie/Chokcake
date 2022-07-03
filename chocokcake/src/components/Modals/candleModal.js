import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import bsred from "../../img/pixelart/candle/red.png";
import bsorange from "../../img/pixelart/candle/orange.png";
import bsyellow from "../../img/pixelart/candle/yellow.png";
import bsgreen from "../../img/pixelart/candle/green.png";
import bsblue from "../../img/pixelart/candle/blue.png";
import bsnavy from "../../img/pixelart/candle/navy.png";
import bspurple from "../../img/pixelart/candle/purple.png";
import bsbrown from "../../img/pixelart/candle/brown.png";
import bsone from "../../img/pixelart/candle/one.png";
import bstwo from "../../img/pixelart/candle/two.png";
import bsthree from "../../img/pixelart/candle/three.png";
import bsfour from "../../img/pixelart/candle/four.png";
import bsfive from "../../img/pixelart/candle/five.png";
import bssix from "../../img/pixelart/candle/six.png";
import bsseven from "../../img/pixelart/candle/seven.png";
import bseight from "../../img/pixelart/candle/eight.png";
import bsnine from "../../img/pixelart/candle/nine.png";
import bszero from "../../img/pixelart/candle/zero.png";

function ChooseCandle() {
    const [candles, setCandles] = useState("");
    const candle = [
        { image: bsred },
        { image: bsorange },
        { image: bsyellow },
        { image: bsgreen },
        { image: bsblue },
        { image: bsnavy },
        { image: bspurple },
        { image: bsbrown },
        { image: bsone },
        { image: bstwo },
        { image: bsthree },
        { image: bsfour },
        { image: bsfive },
        { image: bssix },
        { image: bsseven },
        { image: bseight },
        { image: bsnine },
        { image: bszero },
    ];

    return (
        <Background>
            <BackTab>
                <FrontTab>
                    {candle.map((img) => (
                        <Candle>
                            <CandleImg src={img.image}></CandleImg>
                        </Candle>
                    ))}
                </FrontTab>
                <Link to="/writerLetter">
                    <ChooseBtn>고르기</ChooseBtn>
                </Link>
            </BackTab>
        </Background>
    );
}

export default ChooseCandle;

const Background = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #e5e5e5;
`;

const BackTab = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 570px;
    height: 750px;
    background-color: #ecdbc5;
    border-radius: 10px;
`;

const FrontTab = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 510px;
    height: 570px;
    margin-top: 25px;
    background-color: #ad8b73;
    overflow-x: hidden;
`;

const Candle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 130px;
    height: 170px;
    background-color: white;
    border-radius: 10px;
    margin-left: 25px;
    margin-top: 20px;
`;

const ChooseBtn = styled.button`
    background-color: #fff6ea;
    width: 170px;
    height: 50px;
    border-radius: 10px;
    margin-top: 50px;
    border: 0;
    outline: 0;
    font-size: 25px;
    font-family: "NeoDunggeunmo";
`;

const CandleImg = styled.img`
    width: 50px;
    height: 120px;
`;
