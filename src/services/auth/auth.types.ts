export type Author = {
  id: string
  name: string
}

export type AuthResponse = {
  avatar: null | string
  created: string
  email: string
  id: string
  isEmailVerified: boolean
  name: string
  updated: string
} | null

export type LoginArgs = {
  email: string
  password: string
  rememberMe: boolean
}

export type SingUpArgs = {
  email: string
  html?: string
  name?: string
  password: string
  sendConfirmationEmail?: boolean
  subject?: string
}

export type ResendVerificationEmailArgs = {
  html?: string
  subject?: string
  userId: string
}

export type RecoverPasswordArgs = {
  email: string
  html?: string
  subject?: string
}

export type ResetPasswordArgs = {
  password: string
  token?: string
}
export type UpdateUser = {
  avatar?: string
  name?: string
}
