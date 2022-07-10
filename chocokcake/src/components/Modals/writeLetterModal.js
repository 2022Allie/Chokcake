import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const defaultFont = "NeoDunggeunmo";
const BASEURL = process.env.REACT_APP_BASE_URL;

function WriteLetter({ setLetterMd, LetterMd }) {
    const [cakeTheme, setCakeTheme] = useState("");
    const [cakeId, setCakeId] = useState("");
    const [letter, setLetter] = useState("");
    const [postman, setPostman] = useState("");

    useEffect(() => {
        const getCakeInfo = async () => {
            const result = await axios.get(`${BASEURL}/cake/mine`, {
                headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
            });
            setCakeTheme(result.data.cake_list[0].theme);
            setCakeId(result.data.cake_list[0].id);
        };
        getCakeInfo();
    }, []);

    const complete = () => {
        if (letter === "" && postman === "") {
            alert("이름과 하고 싶으신 이야기를 입력해주세요.");
        } else if (postman === "") {
            alert("당신의 이름을 입력해주세요");
        } else if (letter === "") {
            alert("하고 싶으신 이야기를 적어주세요");
        } else {
            setLetterMd(false);
            axios({
                method: "post",
                url: `${BASEURL}/cake/${cakeId}/candle`,
                data: {
                    theme: cakeTheme,
                    postman: postman,
                    letter: letter,
                },
            })
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    alert(err);
                });
        }
    };

    const backgroundModel = () => {
        setLetterMd(false);
    };

    return (
        <>
            <ModalBackground className="back">
                <Back onClick={backgroundModel}></Back>
                <Modal className="back">
                    <NameInput
                        onChange={(e) => {
                            setPostman(e.target.value);
                        }}
                        className="back"
                        placeholder="From. "
                    />
                    <Letter
                        onChange={(e) => {
                            setLetter(e.target.value);
                        }}
                        className="back"
                        placeholder="하시고 싶으신 이야기를 적어주세요."
                    />
                    <ClearButton className="back" onClick={complete}>
                        완료
                    </ClearButton>
                </Modal>
            </ModalBackground>
        </>
    );
}

const ModalBackground = styled.div`
    position: absolute;
    top: 0;
    position: fixed;
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

export default WriteLetter;
