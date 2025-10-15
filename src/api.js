import axios from "axios";

export const api = axios.create({
    baseURL: "https://68ef6684b06cc802829d3de1.mockapi.io/",
    headers: { "Content-Type": "application/json" },
});
