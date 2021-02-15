import axios from 'axios';


const api=axios.create({
    baseURL: `https://geo.ipify.org/api/`
    // baseURL: `https://geo.ipify.org/api/v1?apiKey=${IPFY_API_KEY}`
})

export default api;

