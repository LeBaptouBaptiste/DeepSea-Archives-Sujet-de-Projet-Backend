import { findUserByEmail, createUser } from "./userService"
import { hashPassword, comparePassword } from "../utils/hash"
import { signToken } from "../utils/jwt"

export const registerUser = async (email: string, username: string, password: string) => {
  const existing = await findUserByEmail(email)
  if (existing) throw new Error("Email already exists")

  const hashed = await hashPassword(password)
  return createUser(email, username, hashed)
}

export const loginUser = async (email: string, password: string) => {
  const user = await findUserByEmail(email)
  if (!user) throw new Error("Invalid credentials")

  const ok = await comparePassword(password, user.password)
  if (!ok) throw new Error("Invalid credentials")

  const token = signToken({ id: user.id, role: user.role })
  return { user, token }
}
