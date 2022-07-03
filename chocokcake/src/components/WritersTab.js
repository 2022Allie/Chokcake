import styled from "styled-components";

function WritersTab({ writerClicked }) {
    console.log(writerClicked);

    return (
        <WriterName hidden={writerClicked ? false : true}>
            <Writers></Writers>
            <Writers></Writers>
            <Writers></Writers>
            <Writers></Writers>
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
    background-color: #ecdbc5;
    overflow-x: hidden;
    overflow-y: auto;
    scrollbar-width: thin;
    ::-webkit-scrollbar {
        display: none;
    }
`;

const Writers = styled.div`
    width: 190px;
    height: 50px;
    background-color: #ad8b73;
    margin-top: 20px;
    margin-left: 20px;
    border-radius: 10px;
`;
