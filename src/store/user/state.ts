export interface UserUserInterface {
  email: string,
  id: string,
  token: string
}

export interface UserStateInterface {
  isAutheticated: boolean,
  user: unknown
}

function state(): UserStateInterface {
  return {
    isAutheticated: false,
    user: null
  }
}

export default state
