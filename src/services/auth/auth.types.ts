export type UserData = {
  avatar: string
  created: string
  email: string
  id: string
  isEmailVerified: boolean
  name: string
  updated: string
}

export type Login = {
  email: string
  password: string
  rememberMe: boolean
}

export type SingUp = {
  email: string
  html: string
  name: string
  password: string
  sendConfirmationEmail: boolean
  subject: string
}

export type ResendVerificationEmail = {
  html: string
  subject: string
  userId: string
}
