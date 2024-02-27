// api.ts
import axios from 'axios'

const axiosPublicInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_PATH_URI,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

export default axiosPublicInstance