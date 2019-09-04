import axios from 'axios';

const unsplashId = "UNSPLASHID";
export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ' + unsplashId
    }
});