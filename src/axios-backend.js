import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://192.168.1.2:8081/'
});

export default instance;