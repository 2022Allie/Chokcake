import MainCake from "../../img/pixelart/MainLogo.png";
import { Link } from "react-router-dom";
import * as S from "./styles";

function Main() {
    return (
        <S.Container>
            <S.Cake>
                <img src={MainCake}></img>
            </S.Cake>
            <S.Logo>초'콕'케이크</S.Logo>
            <S.Button>
                <Link to="/login">
                    <S.MakeCake>초'콕'케이크 만들러가기</S.MakeCake>
                </Link>
            </S.Button>
        </S.Container>
    );
}

export default Main;
