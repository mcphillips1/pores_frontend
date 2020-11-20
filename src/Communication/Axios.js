import axios from 'axios'

const instance = axios.create({

    baseURL:'http://localhost:8102'
})

export default instance;