import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8081/learnromanian/v0.0.1/api/'
});

const user = JSON.parse(localStorage.getItem('user'));

if (user && user.accessToken) {
    instance.defaults.headers.common['Authorization'] = 'Bearer ' + user.accessToken;
}

export default instance;