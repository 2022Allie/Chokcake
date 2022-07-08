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
            });
    };
};

export default loginDB;
