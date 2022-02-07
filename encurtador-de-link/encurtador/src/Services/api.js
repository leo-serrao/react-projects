import axios from 'axios'

export const key = '21d622a32e771e2b730b37fc0f027c5e82ffb36e'

const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4',
  headers: {
    Authorization: `Bearer ${key}`
  }
})

export default api
