import styled from "styled-components";
import { Link } from "react-router-dom";

const defaultFont = 'NeoDunggeunmo';

function Login() {
    return (
        <>
            <Logo>초'콕'케이크</Logo>
            <Title>로그인 중 . . .</Title>
            <Inputs>
                <Input placeholder="아이디를 입력해주세요."></Input>
                <Input placeholder="비밀번호를 입력해주세요."></Input>
            </Inputs>
            <Buttons>
                <Link to="/signup">
                    <Button>가입하러 가기</Button>
                </Link>
                <Link to="/makecake">
                <Button>로그인</Button>
                </Link>
            </Buttons>
        </>
    )
}

const Logo = styled.div`
    color: #AD8B73;
    font-size: 40px;
    margin-left: 40px;
    margin-top: 27px;
`


const Title = styled.div`
    font-size: 44px;
    display: flex;
    justify-content: center;
    margin-top: 70px;
    margin-bottom: 100px;
`

const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Input = styled.input`
    font-family: ${defaultFont};
    width: 780px;
    height: 60px;
    border: none;
    border-radius: 20px;
    background-color: #ECDBC5;
   ::placeholder {
        color: #AD8B73;
        font-size: 20px;
   }
   padding-left: 20px;
   margin-bottom: 40px;
   outline: none;
   font-size: 24px;
`
const Buttons = styled.div`
    display: flex;
    justify-content: center;
`

const Button = styled.button`
    font-family: ${defaultFont};
    font-size: 30px;
    width: 340px;
    height: 72px;
    background-color: #ECDBC5;
    border: none;
    border-radius: 20px;
    margin-left: 60px;
    margin-right: 60px;
`

export default Login;