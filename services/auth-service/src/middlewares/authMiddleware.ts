import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

export interface AuthRequest extends Request {
  user?: any
}

export const authRequired = (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const header = req.headers.authorization
    if (!header) return res.status(401).json({ error: "Missing token" })

    const token = header.split(" ")[1]
    const data = jwt.verify(token, process.env.JWT_SECRET as string)

    req.user = data
    next()
  } catch {
    return res.status(401).json({ error: "Invalid token" })
  }
}
