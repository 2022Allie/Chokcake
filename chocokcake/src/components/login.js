import styled from "styled-components";
import { Link } from "react-router-dom";

const defaultFont = "NeoDunggeunmo";

function Login() {
    return (
        <>
            <Logo>초'콕'케이크</Logo>
            <Title>로그인 중 . . .</Title>
            <LoginInputs>
                <Inputs>
                    <Input placeholder="아이디를 입력해주세요."></Input>
                    <Input placeholder="비밀번호를 입력해주세요."></Input>
                </Inputs>
                <Buttons>
                    <Link to="/signup">
                        <Button>가입하러 가기</Button>
                    </Link>
                    <Link to="/choosePage">
                        <Button>로그인</Button>
                    </Link>
                </Buttons>
            </LoginInputs>
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
    margin-top: 70px;
    margin-bottom: 100px;
`;

const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
`;

const Input = styled.input`
    font-family: ${defaultFont};
    width: 780px;
    height: 60px;
    border: none;
    border-radius: 20px;
    background-color: #ecdbc5;
    ::placeholder {
        color: #ad8b73;
        font-size: 20px;
    }
    padding-left: 20px;
    margin-bottom: 40px;
    outline: none;
    font-size: 24px;
`;
const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Button = styled.button`
    font-family: ${defaultFont};
    font-size: 30px;
    width: 380px;
    height: 72px;
    background-color: #ecdbc5;
    border: none;
    border-radius: 20px;
`;

const LoginInputs = styled.div`
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    width: 800px;
`;

export default Login;
