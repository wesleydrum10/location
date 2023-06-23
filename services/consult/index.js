import api from '../../api/index'
import config from '../../config/environment'

function listConsultIp(ip) {
  return new Promise((resolve, reject) => {
    api
      .get(`/api/v2/country,city?apiKey=${config.key.apiKey}&ipAddress=${ip}`)
      .then(({data}) => resolve(data))
      .catch((error) => {
        if(error?.response?.code === 422) {
          error.message = error.response.messages
        }
        reject(console.error(error))
      })
  })
}

export default { listConsultIp }
