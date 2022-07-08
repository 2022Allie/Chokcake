import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

const defaultFont = "NeoDunggeunmo";
const BASEURL = process.env.REACT_APP_BASE_URL;

function Withdrawal({ withdrawal }) {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const deleteAccount = async (e) => {
        console.log(e);
        console.log(localStorage.getItem("accessToken"))
        if (e.key === "Enter") {
            try {
                await axios({
                    method: "delete",
                    url: `${BASEURL}/account`,
                    data: {
                        account_id: id,
                        password: password
                    },
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("accessToken")}`

                    }
                })
            }
            catch (e) {
                alert("아이디나 비밀번호를 틀리셨습니다.");
            }
        }
    }

    return (
        <>
            <Container display={withdrawal ? "flex" : "none"} >
                <Input onChange={(e) => { setId(e.target.value); }} placeholder="아이디를 입력해주세요" ></Input>
                <Input type="password" onChange={(e) => { setPassword(e.target.value); }} onKeyPress={deleteAccount} placeholder="비밀번호를 입력해주세요"></Input>
            </Container>
        </>
    )
}

const Container = styled.div`
    position: fixed;
    top: 700px;
    right: 33px;
    width: 408px;
    height: 146px;
    background-color: #FFF6EA;
    border-radius: 12px;
    display: ${props => props.display};
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    border: 1px solid #AD8B73;
    align-items: center;
`

const Input = styled.input`
    color: #AD8B73;
    font-size: 30px;
    width: 343px;
    height: 39px;
    border: none;
    border-radius: 12px;
    background-color: #ECDBC5;
    padding-left: 10px;
    ::placeholder{
        font-size: 20px;
        color: #AD8B73;
        font-family: ${defaultFont};
    }
    outline: none;
    font-family: ${defaultFont};
    font-size: 20px;
`

export default Withdrawal;