import styled from "styled-components";
import MainCake from "../../img/MainLogo.png";
import { Link } from 'react-router-dom';
import * as S from './styles';


function Main() {
    return (
        <>
            <S.Cake> <img src={MainCake}></img></S.Cake>
            <S.Logo>초'콕'케이크</S.Logo>
            <S.Button>
                <Link to="/login">
                    <S.MakeCake>초'콕'케이크  만들러가기</S.MakeCake>
                </Link>
            </S.Button>
        </>
    )
}

export default Main;