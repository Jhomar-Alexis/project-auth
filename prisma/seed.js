import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()
async function main() {

    await prisma.role.createMany({
        data: [
            {
                name: 'Administrador'
            },
            {
                name: 'Usuario'
            }
        ]
    })

    const salt = await bcrypt.genSalt()
    const password = await bcrypt.hash('12345678', salt)

    await prisma.user.upsert({
        where: { email: 'alexis@tgiperu.com' },
        update: {},
        create: {
            email: 'alexis@tgiperu.com',
            name: 'Alexis',
            password,
            salt,
            roleId: 1
        },
    })

}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })