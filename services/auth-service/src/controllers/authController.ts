import { Request, Response } from "express"
import { registerUser, loginUser } from "../services/authService"
import { prisma } from "../prisma/client"

export const register = async (req: Request, res: Response) => {
  try {
    const { email, username, password } = req.body
    const user = await registerUser(email, username, password)
    return res.json(user)
  } catch (err: any) {
    return res.status(400).json({ error: err.message })
  }
}

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body
    const result = await loginUser(email, password)
    return res.json(result)
  } catch (err: any) {
    return res.status(400).json({ error: err.message })
  }
}

export const me = async (req: any, res: Response) => {
  const user = await prisma.user.findUnique({
    where: { id: req.user.id },
  })
  res.json(user)
}
