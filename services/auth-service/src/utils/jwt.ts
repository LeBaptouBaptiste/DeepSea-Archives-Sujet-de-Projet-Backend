import jwt from "jsonwebtoken"

export const signToken = (payload: object) => {
  const secret = process.env.JWT_SECRET!

  const expiresIn: jwt.SignOptions["expiresIn"] =
    (process.env.TOKEN_EXPIRES as any) ?? "2h"

  return jwt.sign(payload, secret, { expiresIn })
}