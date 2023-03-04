import axios from "axios";

export const $api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    timeout: 5000,
    headers: {'X-Custom-Header': 'foobar'}
});

$api.interceptors.request.use((config) => {
    config.headers.Authorization = 'Bearer asdasdasdas'
    config.headers.Accept = 'application/json'

    return config;
})