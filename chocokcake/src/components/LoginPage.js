import axios from "axios";

const loginDB = (id, password) => {
    return function () {
        axios({
            method: "post",
            url: process.env.REACT_APP_BASE_URL + "/account/login",
            data: {
                account_id: id,
                password: password,
            },
        })
            .then((res) => {
                console.log(res.data);
                localStorage.setItem("accessToken", res.data.access_token);
                window.location.href = "/choosePage";
            })
            .catch((err) => {
                console.log(err);
                alert("\t로그인 오류\n 아이디와 비밀번호를 다시 입력해주세요");
            });
    };
};

export default loginDB;
