import styled from "styled-components";

function Developer({developer}) {
    return (
        <>
            <Container display={developer ? "flex" : "none"} >
                <Text>김소연 이강혁 안윤지 정지관</Text>
            </Container>
        </>
    )
}
const Container = styled.div`
    position: fixed;
    top: 450px;
    right: 24px;
    width: 408px;
    height: 100px;
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
    font-size: 28px;
`

export default Developer;