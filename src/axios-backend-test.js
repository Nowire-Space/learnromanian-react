import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://172.18.0.2:8081/'
});

const user = JSON.parse(localStorage.getItem('user'));

if (user && user.accessToken) {
    instance.defaults.headers.common['Authorization'] = 'Bearer ' + user.accessToken;
}

export default instance;