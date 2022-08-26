import styled from "styled-components";

function MyAccount({ account, accountId }) {
  return (
    <>
      <Container display={account ? "flex" : "none"}>
        <Text>ID : {accountId}</Text>
        <Text
          onClick={() => {
            localStorage.removeItem("accessToken");
            alert("로그아웃 되었습니다");
            window.location.href = "/";
          }}
        >
          로그아웃
        </Text>
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
  &:last-child {
    cursor: pointer;
    &:active {
      color: red;
    }
  }
`;

export default MyAccount;
