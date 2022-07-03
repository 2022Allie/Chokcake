import styled from "styled-components";
import { Link } from "react-router-dom";

const defaultFont = "NeoDunggeunmo";

function WriteLetter() {
    return (
        <>
            <ModalBackground>
                <Modal>
                    <NameInput placeholder="From. " />
                    <Letter placeholder="하시고 싶으신 이야기를 적어주세요." />
                    <Link to="/letterWriter">
                        <ClearButton>완료</ClearButton>
                    </Link>
                </Modal>
            </ModalBackground>
        </>
    );
}

const ModalBackground = styled.div`
    top: 0;
    position: fixed;
    background-color: black;
    background-color: rgba(0, 0, 0, 0.65);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
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
`;

export default WriteLetter;
