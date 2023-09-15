// prisma/seed.ts

import { PrismaClient } from '@prisma/client'
import data from "./data.json" assert { type: "json" }

const prisma = new PrismaClient()

async function main() {
    console.log(`Start seeding ...`, data)

    for (const p of data) {
        console.log('log?')
        const user = await prisma.guest.create({
            data: {
                "name": p.name,
                "phoneNumber": p.phoneNumber,
                "email": p.email,
                "fullVegeterian": p.fullVegeterian

            }
        })
        console.log(`Created guest with id: ${user.id}`)
    }
    console.log(`Seeding finished.`)
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