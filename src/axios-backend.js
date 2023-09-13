import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URI + '/learnromanian/v0.0.1/api/'
});

const user = JSON.parse(localStorage.getItem('user'));

if (user && user.accessToken) {
    instance.defaults.headers.common['Authorization'] = 'Bearer ' + user.accessToken;
}

export default instance;
