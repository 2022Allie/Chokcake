import styled from "styled-components";

const Postmans = ({ candle }) => {
    const a = [];
    for (let i = 0; i < candle.length; i++) {
        a.push(candle[i]);
    }

    const nameList = a.map((name, index) => <Writers key={index}>{name}</Writers>);
    return <div>{nameList}</div>;
};

export default Postmans;

const Writers = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: white;
    width: 190px;
    height: 50px;
    background-color: #ad8b73;
    margin-top: 20px;
    margin-left: 20px;
    border-radius: 10px;
    z-index: 3;
`;
