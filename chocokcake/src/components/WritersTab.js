import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Postmans from "./Postmans";

const BASEURL = process.env.REACT_APP_BASE_URL;
function WritersTab({ writerClicked, cakeNum }) {
    let candles = [];
    const [candle, setCandle] = useState("");

    useEffect(() => {
        const getCakeInfo = async () => {
            const result = await axios.get(`${BASEURL}/cake/mine`, {
                headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
            });
            let cakeId = result.data.cake_list[0].id;
            getCandleInfo(cakeId);
        };
        getCakeInfo();
    }, []);

    const getCandleInfo = async (cakeId) => {
        const result = await axios.get(`${BASEURL}/cake/${cakeId}/candle`, {
            headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
        });
        for (let i = 0; i < result.data.candles.length; i++) {
            candles.push(result.data.candles[i].postman);
        }
        setCandle(candles);
    };

    return (
        <WriterName hidden={writerClicked ? false : true}>
            <Postmans candle={candle} />
        </WriterName>
    );
}

export default WritersTab;

const WriterName = styled.div`
    position: absolute;
    margin-top: 40px;
    width: 230px;
    height: 200px;
    margin-left: 50px;
    border-radius: 10px;
    color: white;
    background-color: #ecdbc5;
    overflow-x: hidden;
    overflow-y: auto;
    scrollbar-width: thin;
    ::-webkit-scrollbar {
        display: none;
    }
    z-index: 2;
`;
