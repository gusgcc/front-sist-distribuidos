import axios from 'axios'
const URL = 'https://back-sist-distribuidos.herokuapp.com/'
export default {
  async createPublication(data: any) { // INICIAR SESION
    return axios({
      method: 'POST',
      url: URL + 'publicacion',
      data
    })
  },
  async getPublicationsByUser(idUser: string) {
    return axios({
      method: 'get',
      url: URL + 'publicacion/' + idUser
    })
  },
  async getPublicationById(idPublication: string) {
    return axios({
      method: 'get',
      url: URL + 'publicacione/' + idPublication
    })
  },
  async updatePublication(data: any) {
    return axios({
      method: 'PUT',
      url: URL + 'publicacion',
      data
    })
  },
  async deletePublication(idPublication: any) {
    return axios({
      method: 'DELETE',
      url: URL + 'publicacion/' + idPublication
    })
  },
  async getAllPublication() {
    return axios({
      method: 'get',
      url: URL + "publicacion"
    })
  }
}
