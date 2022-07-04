import styled from "styled-components";
import { Link } from "react-router-dom";

const defaultFont = "NeoDunggeunmo";

function WriteLetter({ setLetterMd, LetterMd }) {
    const complete = () => {
        setLetterMd(false);
    };

    return (
        <>
            <ModalBackground className="back">
                <Modal className="back">
                    <NameInput className="back" placeholder="From. " />
                    <Letter className="back" placeholder="하시고 싶으신 이야기를 적어주세요." />
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
