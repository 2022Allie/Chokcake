import styled from "styled-components";

const defaultFont = "NeoDunggeunmo";

export const Cake = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: center;
`;
export const Logo = styled.div`
    color: #ad8b73;
    font-size: 100px;
    display: flex;
    justify-content: center;
    margin-top: 30px;
`;
export const Button = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: center;
`;

export const MakeCake = styled.button`
    font-family: ${defaultFont};
    border: none;
    border-radius: 20px;
    background-color: #ecdbc5;
    width: 540px;
    height: 50px;
    font-size: 30px;
`;
