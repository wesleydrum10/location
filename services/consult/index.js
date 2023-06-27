/* eslint-disable import/no-anonymous-default-export */
import api from '../../api/index'
import config from '../../config/environment'

function listConsultIp(ip) {
  return new Promise((resolve, reject) => {
    api
      .get(`/api/v2/country,city?apiKey=${config.key.apiKey}&ipAddress=${ip}`)
      .then(({ data }) => resolve(data))
      .catch((data) => {
        reject(data.response.data.messages)
        console.error(data.response.data.messages)
      })
  })
}

export default { listConsultIp }
