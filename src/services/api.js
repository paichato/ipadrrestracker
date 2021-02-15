import axios from 'axios';
// import IPFY_API_KEY from '../Pages/Homepage/index';

const IPFY_API_KEY=process.env.REACT_APP_IPFY_API_KEY;

const api=axios.create({
    baseURL: `https://geo.ipify.org/api/v1?apiKey=${IPFY_API_KEY}&`
})

export default api;

//arrr