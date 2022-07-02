import styled from "styled-components";

function MyAccount ({account}) {
    return(
        <>
            <Container display={account ? "flex" : "none"} >
                <Text>ID : inung1004</Text>
                <Text onClick={() =>alert("아직 구현 중인 기능입니다.")}>비밀번호 바꾸기</Text>
            </Container>
        </>
    )
}

const Container = styled.div`
    position: fixed;
    top: 200px;
    right: 24px;
    width: 408px;
    height: 146px;
    background-color: #FFF6EA;
    border-radius: 12px;
    display: ${props => props.display};
    flex-direction: column;
    justify-content: center;
    padding-left: 15px;
    gap: 15px;
    border: 1px solid #AD8B73;
`

const Text = styled.span`
    color: #AD8B73;
    font-size: 30px;
`

export default MyAccount;