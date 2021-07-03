import axios from './index'

export default {
  getSistemas () {
    return axios.get('/api/sistemas')
  },
  getSistema ( id ) {
    return axios.get(`/api/sistemas/${id}`)
  },
  storeSistema ( payload ) {
    return axios.post('/api/sistemas', payload)
  },
  updateSistema ( id, payload ) {
    return axios.put(`/api/sistemas/${id}`, payload)
  },
  deleteSistema ( id ) {
    return axios.put(`/api/sistemas/eliminar/${id}`)
  },
}
