import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const email = 'admin@hireclaw.cc'
  const password = 'Hireclaw@1'
  const name = 'Admin'

  const existing = await prisma.user.findUnique({ where: { email } })
  if (existing) {
    console.log('Admin account already exists (%s)', email)
    return
  }

  const hashedPassword = await bcrypt.hash(password, 12)

  const admin = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
      role: 'ADMIN',
    },
  })

  console.log('Created admin account: %s (id: %s)', admin.email, admin.id)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
