import { Link } from "react-router-dom";
import styled from "styled-components";

const defaultFont = "NeoDunggeunmo";

function Signup() {
    return (
        <>
            <Logo>초'콕'케이크</Logo>
            <Title>회원가입 중 . . .</Title>
            <Inputs>
                <ID>
                    <IdInput placeholder="사용하실  ID를 입력해주세요."></IdInput>
                    <IdButton>중복확인</IdButton>
                </ID>
                <Input type="password" placeholder="사용하실 비밀번호를 입력해주세요."></Input>
                <Input type="password" placeholder="비밀번호를 한 번 더 입력해주세요."></Input>
                <Input placeholder="이름을 입력해주세요."></Input>
                <Input placeholder="생일을 입력해주세요. ex) 07-19"></Input>
                <Link to="/choosepage">
                    <SignupButton>가입하기</SignupButton>
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
    margin-bottom: 40px;
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

export default Signup;
