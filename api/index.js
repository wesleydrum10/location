import Axios from 'axios'
import config from '../config/environment/index'

const api = Axios.create({
  data: { apikey: config.key.apiKey },
  baseURL: config.publicUrl.url,
})

export default api 
