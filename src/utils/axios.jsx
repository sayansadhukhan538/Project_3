import axios from 'axios';

const axiosInstances = axios.create({
    baseURL:'https://reqres.in/api/'
});
export default axiosInstances;