import axios from 'axios'
import { api } from '../urlconfig'

const axiosInstance = axios.create({
    baseURL:api,
    headers:{
        'Content-type':'application/json',
        'Authorization':''
    }
})

export default axiosInstance