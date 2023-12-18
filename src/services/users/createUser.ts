import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createUser() {
    const user = await prisma.users.create({
        data: {
            email: 'zalupa',
            password: '8544515',
        },
    });
    console.log(user);
}