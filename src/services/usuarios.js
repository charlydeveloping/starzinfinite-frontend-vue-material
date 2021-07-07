import axios from './index'

export default {
  getUsuarios () {
    return axios.get('/api/usuarios')
  },
  getUsuario ( id ) {
    return axios.get(`/api/usuarios/${id}`)
  },
  storeUsuario ( payload ) {
    return axios.post('/api/usuarios', payload)
  },
  updateUsuario ( id, payload ) {
    return axios.put(`/api/usuarios/${id}`, payload)
  },
  deleteUsuario ( id ) {
    return axios.put(`/api/usuarios/eliminar/${id}`)
  },
}
