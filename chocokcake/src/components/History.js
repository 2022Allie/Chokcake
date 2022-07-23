import styled from "styled-components";
import Menu from "./Menu/menu";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BASEURL = process.env.REACT_APP_BASE_URL;

const History = () => {
    const [owner, setOwner] = useState(0);
    const [accountId, setAccountId] = useState("");
    const [arr, setArr] = useState([]);

    useEffect(() => {
        const getCakeInfo = () => {
            axios
                .get(`${BASEURL}/cake/mine`, {
                    headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
                })
                .then((result) => {
                    setOwner(result.data.cake_list[0].user_name);
                    setArr([...result.data.cake_list]);
                });
        };
        getCakeInfo();
    }, []);

    useEffect(() => {
        const getUserInfo = () => {
            axios
                .get(`${BASEURL}/account/information`, {
                    headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
                })
                .then((result) => {
                    setAccountId(result.data.account_id);
                });
        };
        getUserInfo();
    }, []);

    return (
        <>
            <Link to="/usermain">
                <Logo>초‘콕’케이크</Logo>
            </Link>
            <Menu accountId={accountId}></Menu>
            <Container>
                <Wrapper>
                    {arr.map((year, index) => {
                        let [y, m, d] = year.birth_day.split("-");
                        return (
                            <Link to="/letterOwner" state={{ data: index }}>
                                <MyHistory key={index}>
                                    &nbsp;&nbsp;&nbsp;{y}년 {owner} 님의 케이크
                                </MyHistory>
                            </Link>
                        );
                    })}
                </Wrapper>
            </Container>
        </>
    );
};

export default History;

const Container = styled.div`
    display: flex;
    justify-content: center;
`;

const Logo = styled.div`
    margin-left: 40px;
    margin-top: 27px;
    font-size: 40px;
    color: #ad8b73;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1100px;
    height: 600px;
    background-color: #ecdbc5;
    border-radius: 30px;
    margin-top: 100px;
`;

const MyHistory = styled.button`
    display: flex;
    align-items: center;
    width: 1000px;
    height: 60px;
    background-color: #fff6ea;
    border-radius: 10px;
    margin-top: 40px;
    border: 0;
    outline: 0;
    font-size: 25px;
    font-family: "NeoDunggeunmo";
    &:hover {
        transform: scale(1.05);
        background-color: #ad8b73;
        transition: 0.5s;
    }
`;
