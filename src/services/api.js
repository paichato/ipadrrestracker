import axios from 'axios';


const api=axios.create({
    baseURL: 'http://ip-api.com/json'
})

export default api;