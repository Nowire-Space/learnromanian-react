import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://172.18.0.2:8081/'
});

export default instance;