import prisma from '../lib/prisma'

export async function createContactSubmission(data: {
  name: string
  email: string
  company?: string
  message: string
}) {
  return prisma.contactSubmission.create({
    data,
  })
}
