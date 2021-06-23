import axios from 'axios'
const URL = 'https://back-sist-distribuidos.herokuapp.com/usuarios'
export default {
  async login(data: any) { // INICIAR SESION
    return axios({
      method: 'POST',
      url: URL + "login",
      data
    })
  },
  async register(data: any) {
    return axios({
      method: 'POST',
      url: URL,
      data
    })
  },
  async getUser(idUser: string) {
    return axios({
      method: 'get',
      url: URL + '/' + idUser
    })
  },
  async updateUser(idUser: string) {
    return axios({
      method: 'PUT',
      url: URL + '/' + idUser
    })
  },
  /**
   * @description Setea el token de acceso por defecto para todas las consultas con axios
   * @param token {string}
   */
  setAuthToken(token: string) {
    if (token) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
    } else {
      delete axios.defaults.headers.common['Authorization']
    }
  }
}
