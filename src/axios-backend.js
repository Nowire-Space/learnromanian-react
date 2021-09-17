import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://192.168.1.2:8081/learnromanian/v0.0.1/api/'
});

export default instance;