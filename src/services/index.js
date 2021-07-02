import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://starzinfiniteapi.neuronatexnology.com',
})

instance.interceptors.request.use(
    config => {
      const token = localStorage.getItem('access_token')
      config.headers.Authorization = `Bearer ${token}`
      return config
    },
    error => {
      return Promise.reject(error)
    }
)
  
instance.interceptors.response.use(
    response => {
        return response
    },
    error => {
        const status = error.response.status

        if (status === 401) {
        localStorage.setItem('token', '')
        router.push({ name: 'auth1.sign-in1' })
        }

        return Promise.reject(error)
    }
)

export default instance