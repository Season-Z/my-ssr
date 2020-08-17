import axios from 'axios'
import { SERVER_BASEURL } from '@utils/config'

const instance = axios.create({
  baseURL: SERVER_BASEURL,
})

export default instance
