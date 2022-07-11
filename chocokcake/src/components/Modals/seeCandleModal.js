import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

const defaultFont = "NeoDunggeunmo";
const BASEURL = process.env.REACT_APP_BASE_URL;

function SeeCandle({ setCandleSee }) {
    const backgroundModel = () => {
        setCandleSee(false);
    };

    const confirm = () => {
        setCandleSee(false);
    };

    // 초 열어보기 호출
    // usestate를 이용해서 응답 받은 값들을 넣고 출력하기
    // 초의 id를 고려하며 출력하기
    // useEffect(() => {
    //     const getCandleInfo = async () => {
    //         const result = await axios.get(`${BASEURL}/cake/candle/{candle_id}`, {
    //             headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
    //         });
    //         console(result);
    //     };
    //     getCandleInfo();
    // }, []);

    return (
        <>
            <ModalBackground className="back">
                <Back onClick={backgroundModel}></Back>
                <Modal className="back">
                    <NameInput className="back" />
                    <Letter className="back" />
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
const NameInput = styled.input`
    font-family: ${defaultFont};
    width: 617px;
    height: 36px;
    border: none;
    outline: none;
    background-color: #fff6ea;
    border-radius: 20px;
    font-size: 30px;
    padding: 20px;
    ::placeholder {
        color: #ad8b73;
    }
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
    ::placeholder {
        color: #ad8b73;
    }
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
