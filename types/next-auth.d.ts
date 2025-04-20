import { DefaultSession } from "next-auth"
import { Role } from "@prisma/client"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      role: Role
      studentId?: string
    } & DefaultSession["user"]
  }

  interface User {
    id: string
    role: Role
    studentId?: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
    role: Role
    studentId?: string
  }
} 