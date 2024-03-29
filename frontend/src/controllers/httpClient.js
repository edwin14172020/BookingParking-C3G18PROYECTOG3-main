import axios from "axios";

const httpClient = axios.create({
    baseURL: "http://localhost:5001",
    timeout:3000,
    headers:{
        "Content-Type": "application/json"
    }
});

export default httpClient;