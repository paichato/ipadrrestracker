import axios from 'axios';


const api=axios.create({
    baseURL: 'https://ip-api.com/json'
})

export default api;

//arrr