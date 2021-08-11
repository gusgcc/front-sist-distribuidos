import axios from 'axios'
const URL = 'https://back-sist-distribuidos.herokuapp.com/'
export default {
  async postular (data: any) {
    return axios({
      method: 'POST',
      url: URL + 'registrarPostulacion',
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      data
    })
  },
  async getListMyPostulations (idEmpleado:string) {
    return axios({
      method: 'GET',
      url: URL + 'mispostulaciones/' + idEmpleado
    })
  }
}
