import { Request, Response } from "express"
import { updateUserRole, getAllUsers } from "../services/userService"

export const adminGetUsers = async (_req: Request, res: Response) => {
  const users = await getAllUsers()
  res.json(users)
}

export const adminUpdateRole = async (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const { role } = req.body

  if (!["USER", "EXPERT", "ADMIN"].includes(role))
    return res.status(400).json({ error: "Invalid role" })

  const user = await updateUserRole(id, role)
  res.json(user)
}
