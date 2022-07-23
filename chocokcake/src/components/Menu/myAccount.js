import styled from "styled-components";

function MyAccount({ account, accountId }) {
    return (
        <>
            <Container display={account ? "flex" : "none"}>
                <Text>ID : {accountId}</Text>
                <Text onClick={() => alert("아직 구현 중인 기능입니다.")}>비밀번호 바꾸기</Text>
            </Container>
        </>
    );
}

const Container = styled.div`
    position: fixed;
    top: 180px;
    right: 24px;
    width: 408px;
    height: 146px;
    background-color: #fff6ea;
    border-radius: 12px;
    display: ${(props) => props.display};
    flex-direction: column;
    justify-content: center;
    padding-left: 15px;
    gap: 15px;
    border: 1px solid #ad8b73;
`;

const Text = styled.span`
    color: #ad8b73;
    font-size: 30px;
`;

export default MyAccount;
