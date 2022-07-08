import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as axios from 'axios';

const defaultFont = "NeoDunggeunmo"; 
const BASEURL = process.env.REACT_APP_BASE_URL;

function Signup() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [checkPassword, setCheckPassword] = useState("");
    const [name, setName] = useState("");
    const [month, setMonth] = useState("");
    const [day, setDay] = useState("");
    const [idCheck, setIdCheck] = useState(false);

    const signup = async () => {
        try{
            await axios.post(`${BASEURL}/account`,
                {
                    account_id: id,
                    password: password,
                    name: name,
                    month_of_birth_day: month,
                    day_of_birth_day: day
                }
            );
        } catch (e) {
            alert("회원가입 실패에 실패하셨습니다.");
        }
    }

    const checkId = async () => {
        try {
            console.log(id);
            const { data } = await axios.post(`${BASEURL}/account/id`, 
            {
                account_id: id
            });
            alert(data.message);
            setIdCheck(true); 
        } catch (e) {
            alert("중복된 아이디입니다.");
        }
    }

    const onSignup = async () => {
        if (password === checkPassword) {
                await signup()
                window.location.href = "/login";
        }
        else alert(` ${id}님 비밀번호가 일치하지 않습니다`)
    }

    return (
        <>
            <Logo>초'콕'케이크</Logo>
            <Title>회원가입 중 . . .</Title>
            <Inputs>
                <ID>
                    <IdInput placeholder="사용하실  ID를 입력해주세요." onChange={(e) => { setId(e.target.value); }}></IdInput>
                    <IdButton onClick={checkId}>중복확인</IdButton>
                </ID>
                <Input type="password" placeholder="사용하실 비밀번호를 입력해주세요." onChange={(e) => { setPassword(e.target.value); }}></Input>
                <Input type="password" placeholder="비밀번호를 한 번 더 입력해주세요." onChange={(e) => { setCheckPassword(e.target.value); }}></Input>
                <Input placeholder="이름을 입력해주세요." onChange={(e) => { setName(e.target.value); }}></Input>
                - 생일을 입력해주세요 -
                <Birth>
                    <BirthInput placeholder="월" onChange={(e) => { setMonth(e.target.value) }} ></BirthInput> <BirthInput placeholder="일" onChange={(e) => { setDay(e.target.value) }}></BirthInput>
                </Birth>
                <Link to="/login">
                    <SignupButton onClick={onSignup}>가입하기</SignupButton>
                </Link>
            </Inputs>
        </>
    );
}

const Logo = styled.div`
    color: #ad8b73;
    font-size: 40px;
    margin-left: 40px;
    margin-top: 27px;
`;
const Title = styled.div`
    font-size: 44px;
    display: flex;
    justify-content: center;
    margin-top: 40px;
`;
const Inputs = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #ad8b73;
    font-size: 25px;
    gap: 10px;
`;
const ID = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 40px;
`;

const IdInput = styled.input`
    padding-left: 20px;
    width: 600px;
    height: 60px;
    background-color: #ecdbc5;
    ::placeholder {
        color: #ad8b73;
        font-size: 20px;
        font-family: ${defaultFont};
    }
    border: none;
    outline: none;
    border-radius: 20px;
    margin-right: 40px;
    margin-bottom: 40px;
    font-family: ${defaultFont};
    font-size: 20px;
`;
const IdButton = styled.button`
    width: 130px;
    height: 62px;
    border: none;
    background-color: #ecdbc5;
    border-radius: 20px;
    font-family: ${defaultFont};
    font-size: 20px;
    color: #ad8b73;
`;

const Input = styled.input`
    width: 780px;
    height: 60px;
    padding-left: 20px;
    background-color: #ecdbc5;
    border: none;
    border-radius: 20px;
    outline: none;
    ::placeholder {
        color: #ad8b73;
        font-size: 20px;
        font-family: ${defaultFont};
    }
    margin-bottom: 30px;
    font-family: ${defaultFont};
    font-size: 20px;
`;

const SignupButton = styled.button`
    width: 300px;
    height: 72px;
    background-color: #ecdbc5;
    font-family: ${defaultFont};
    font-size: 35px;
    border: none;
    border-radius: 20px;
`;

const Birth = styled.div`
    display: flex;
    flex-direction: row;
    gap: 40px;
`

const BirthInput = styled.input`
    width: 350px;
    height: 60px;
    ::placeholder{
        font-family: ${defaultFont};
        color: #ad8b73;
        font-size: 20px;
    }
    background-color: #ecdbc5;
    outline: none;
    border: none;
    border-radius: 20px;
    padding-left: 20px;
    margin-bottom: 40px;
    font-size: 20px;
    font-family: ${defaultFont};
`

export default Signup;
