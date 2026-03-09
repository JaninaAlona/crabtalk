import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-Type": "application/json",
    },
});

const create = (data) => {
    return http.post("/", data);
};

export default {
    create,
};