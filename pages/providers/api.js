import axios from 'axios'

const api = axios.create({
    baseURL: 'https://phpstack-423803-1938873.cloudwaysapps.com/api/integracao/json_pp/'
});
export default api;
