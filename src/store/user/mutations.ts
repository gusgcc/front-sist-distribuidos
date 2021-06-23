import { MutationTree } from 'vuex'
import { UserStateInterface } from './state'

const mutation: MutationTree<UserStateInterface> = {
  changeStateAuthenticated (state: UserStateInterface, statusAuthenticated: boolean) {
    state.isAutheticated = statusAuthenticated
  },
  setUser (state: UserStateInterface, user: any) {
    state.user = user
  }
}

export default mutation
