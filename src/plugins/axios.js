import axios from 'axios'

const request = axios.create({
    baseURL: 'static/', // api的base_url
    timeout: 500000 // 请求超时时间
})

export default request