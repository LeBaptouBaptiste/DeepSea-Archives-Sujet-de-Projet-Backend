import { prisma } from "../prisma/client"
import { Role } from "@prisma/client"

export const findUserByEmail = (email: string) =>
  prisma.user.findUnique({ where: { email } })

export const createUser = (email: string, username: string, password: string) =>
  prisma.user.create({
    data: { email, username, password },
  })

export const updateUserRole = (id: number, role: Role) =>
  prisma.user.update({
    where: { id },
    data: { role },
  })

export const getAllUsers = () =>
  prisma.user.findMany()
