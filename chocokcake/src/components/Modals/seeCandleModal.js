import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

const defaultFont = "NeoDunggeunmo";
const BASEURL = process.env.REACT_APP_BASE_URL;

function SeeCandle({ setCandleSee, ownerCakeNum, currentCandleNum }) {
    const [postman, setPostman] = useState("");
    const [message, setMessage] = useState("");
    let candleNum = currentCandleNum + (ownerCakeNum - 1) * 8 - 1;

    const backgroundModel = () => {
        setCandleSee(false);
    };

    const confirm = () => {
        setCandleSee(false);
    };

    //초 열어보기 호출
    //usestate를 이용해서 응답 받은 값들을 넣고 출력하기
    //초의 id를 고려하며 출력하기
    useEffect(() => {
        const getCandleInfo = async () => {
            const result = await axios.get(`${BASEURL}/cake/mine`, {
                headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
            });
            let cakeId = result.data.cake_list[0].id;
            watchCandle(cakeId);
        };
        getCandleInfo();
    }, []);

    const watchCandle = async (cakeId) => {
        const result = await axios.get(`${BASEURL}/cake/${cakeId}/candle`, {
            headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
        });
        if (result.data.candles[candleNum] === undefined) {
            setMessage("편지가 없어요");
            setPostman("편지가 없어요");
        }
        let candleId = result.data.candles[candleNum].id;
        candleInfo(candleId);
    };

    const candleInfo = async (candleId) => {
        const result = await axios
            .get(`${BASEURL}/cake/candle/${candleId}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
            })
            .catch(() => {
                setPostman("초'콕'케이크");
                setMessage("편지는 생일이 지난 후 확인이 가능합니다.");
            });
        setMessage(result.data.letter);
        setPostman(result.data.postman);
    };
    if (postman === "" || message === "") {
        return <ModalBackground>편지를 로드하는 중...</ModalBackground>;
    }

    return (
        <>
            <ModalBackground className="back">
                <Back onClick={backgroundModel}></Back>
                <Modal className="back">
                    <NameInput className="back">{postman}</NameInput>
                    <Letter className="back" value={message} />
                    <ClearButton className="back" onClick={confirm}>
                        확인
                    </ClearButton>
                </Modal>
            </ModalBackground>
        </>
    );
}

export default SeeCandle;

const ModalBackground = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    background-color: black;
    background-color: rgba(0, 0, 0, 0.65);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
    color: white;
`;

const Back = styled.div`
    width: 100vw;
    height: 100vh;
    z-index: 98;
`;

const Modal = styled.div`
    position: absolute;
    width: 745px;
    height: 880px;
    background-color: #ecdbc5;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 99;
`;
const NameInput = styled.div`
    font-family: ${defaultFont};
    width: 617px;
    height: 36px;
    border: none;
    outline: none;
    background-color: #fff6ea;
    border-radius: 20px;
    font-size: 30px;
    padding: 20px;
    color: black;
    z-index: 99;
`;

const Letter = styled.textarea`
    font-family: ${defaultFont};
    margin-top: 2px;
    width: 617px;
    height: 620px;
    border-radius: 20px;
    border: none;
    outline: none;
    background-color: #fff6ea;
    font-size: 30px;
    padding: 20px;
    color: black;
    z-index: 99;
`;

const ClearButton = styled.button`
    margin-top: 10px;
    width: 236px;
    height: 74px;
    background-color: #ad8b73;
    font-size: 30px;
    font-family: ${defaultFont};
    border: none;
    outline: none;
    color: black;
    border-radius: 12px;
    z-index: 99;
`;
