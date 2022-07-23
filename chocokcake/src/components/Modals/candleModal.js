import styled from "styled-components";
import { useState } from "react";
import bsred from "../../img/pixelart/candle/Basic/red.png";
import bsorange from "../../img/pixelart/candle/Basic/orange.png";
import bsyellow from "../../img/pixelart/candle/Basic/yellow.png";
import bsgreen from "../../img/pixelart/candle/Basic/green.png";
import bsblue from "../../img/pixelart/candle/Basic/blue.png";
import bsnavy from "../../img/pixelart/candle/Basic/navy.png";
import bspurple from "../../img/pixelart/candle/Basic/purple.png";
import bsbrown from "../../img/pixelart/candle/Basic/brown.png";
import bsone from "../../img/pixelart/candle/Number/one.png";
import bstwo from "../../img/pixelart/candle/Number/two.png";
import bsthree from "../../img/pixelart/candle/Number/three.png";
import bsfour from "../../img/pixelart/candle/Number/four.png";
import bsfive from "../../img/pixelart/candle/Number/five.png";
import bssix from "../../img/pixelart/candle/Number/six.png";
import bsseven from "../../img/pixelart/candle/Number/seven.png";
import bseight from "../../img/pixelart/candle/Number/eight.png";
import bsnine from "../../img/pixelart/candle/Number/nine.png";
import bszero from "../../img/pixelart/candle/Number/zero.png";
import bsA from "../../img/pixelart/candle/alphabet/candle-A.png";
import bsB from "../../img/pixelart/candle/alphabet/candle-B.png";
import bsC from "../../img/pixelart/candle/alphabet/candle-C.png";
import bsD from "../../img/pixelart/candle/alphabet/candle-D.png";
import bsE from "../../img/pixelart/candle/alphabet/candle-E.png";
import bsF from "../../img/pixelart/candle/alphabet/candle-F.png";
import bsG from "../../img/pixelart/candle/alphabet/candle-G.png";
import bsH from "../../img/pixelart/candle/alphabet/candle-H.png";
import bsI from "../../img/pixelart/candle/alphabet/candle-I.png";
import bsJ from "../../img/pixelart/candle/alphabet/candle-J.png";
import bsK from "../../img/pixelart/candle/alphabet/candle-K.png";
import bsL from "../../img/pixelart/candle/alphabet/candle-L.png";
import bsM from "../../img/pixelart/candle/alphabet/candle-M.png";
import bsN from "../../img/pixelart/candle/alphabet/candle-N.png";
import bsO from "../../img/pixelart/candle/alphabet/candle-O.png";
import bsP from "../../img/pixelart/candle/alphabet/candle-P.png";
import bsQ from "../../img/pixelart/candle/alphabet/candle-Q.png";
import bsR from "../../img/pixelart/candle/alphabet/candle-R.png";
import bsS from "../../img/pixelart/candle/alphabet/candle-S.png";
import bsT from "../../img/pixelart/candle/alphabet/candle-T.png";
import bsU from "../../img/pixelart/candle/alphabet/candle-U.png";
import bsV from "../../img/pixelart/candle/alphabet/candle-V.png";
import bsW from "../../img/pixelart/candle/alphabet/candle-W.png";
import bsX from "../../img/pixelart/candle/alphabet/candle-X.png";
import bsY from "../../img/pixelart/candle/alphabet/candle-Y.png";
import bsZ from "../../img/pixelart/candle/alphabet/candle-Z.png";
import WriteLetter from "./writeLetterModal.js";
import SelectCandle from "./selectCandle.js";

function ChooseCandle({ setCandleMd, setLetterMd, setCandleTheme, candleTheme }) {
    const [chooseClicked, setChooseClicked] = useState(false);
    const choosefuc = () => {
        setChooseClicked(true);
        setCandleMd(false);
        setLetterMd(true);
    };

    const backgroundModel = () => {
        setCandleMd(false);
    };

    const SelectCandle = (index) => {
        setCandleTheme(index);
    };

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
        { image: bsA },
        { image: bsB },
        { image: bsC },
        { image: bsD },
        { image: bsE },
        { image: bsF },
        { image: bsG },
        { image: bsH },
        { image: bsI },
        { image: bsJ },
        { image: bsK },
        { image: bsL },
        { image: bsM },
        { image: bsN },
        { image: bsO },
        { image: bsP },
        { image: bsQ },
        { image: bsR },
        { image: bsS },
        { image: bsT },
        { image: bsU },
        { image: bsV },
        { image: bsW },
        { image: bsX },
        { image: bsY },
        { image: bsZ },
    ];

    return (
        <Background className="back">
            <Back onClick={backgroundModel}></Back>
            {chooseClicked ? <WriteLetter></WriteLetter> : null}
            <BackTab className="back">
                <FrontTab className="back">
                    {candle.map((img, index) => (
                        <Candle
                            onClick={() => {
                                SelectCandle(index);
                            }}
                            background={candleTheme === index ? "#3E2723" : "white"}
                            className="back"
                        >
                            <CandleImg key={index} src={img.image}></CandleImg>
                        </Candle>
                    ))}
                </FrontTab>
                <ChooseBtn onClick={choosefuc}>고르기</ChooseBtn>
            </BackTab>
        </Background>
    );
}

export default ChooseCandle;

const Background = styled.div`
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: black;
    background-color: rgba(0, 0, 0, 0.65);
    z-index: 99;
`;

const Back = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: -1;
`;

const BackTab = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 745px;
    height: 880px;
    background-color: #ecdbc5;
    border-radius: 10px;
    .back {
        z-index: 4;
    }
`;

const FrontTab = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 630px;
    height: 690px;
    border-radius: 10px;
    margin-top: 40px;
    background-color: #ad8b73;
    overflow-x: hidden;
    &::-webkit-scrollbar-thumb {
        border-radius: 2px;
        background: #ccc;
    }
    .back {
        z-index: 4;
    }
`;

const Candle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 170px;
    height: 230px;
    background-color: ${(props) => props.background};
    border-radius: 10px;
    margin-left: 25px;
    margin-top: 15px;
    margin-bottom: 10px;
`;

const ChooseBtn = styled.button`
    background-color: #ad8b73;
    width: 220px;
    height: 55px;
    border-radius: 10px;
    margin-top: 50px;
    border: 0;
    outline: 0;
    font-size: 30px;
    font-family: "NeoDunggeunmo";
    .back {
        z-index: 4;
    }
`;

const CandleImg = styled.img`
    width: 70px;
    height: 160px;
    .back {
        z-index: 4;
    }
`;
