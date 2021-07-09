import axios from './index'

export default {
  getRoles () {
    return axios.get('/api/roles')
  },
  getRol ( id ) {
    return axios.get(`/api/roles/${id}`)
  },
  storeRol ( payload ) {
    return axios.post('/api/roles', payload)
  },
  updateRol ( id, payload ) {
    return axios.put(`/api/roles/${id}`, payload)
  },
  deleteRol ( id ) {
    return axios.put(`/api/roles/eliminar/${id}`)
  },
}
