import axios from "axios";

const loginDB = (id, password) => {
    return function () {
        axios({
            method: "post",
            url: "http://10.156.147.203:8080/account/login",
            data: {
                account_id: "gurdl",
                password: "kang0525@",
            },
        })
            .then((res) => {
                console.log(res.data);
                localStorage.setItem("accessToken", res.data.accessToken);
                window.location.href = "/letterOwner";
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export default loginDB;
