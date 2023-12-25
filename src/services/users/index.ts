import { prisma } from "../prisma";

export async function createUser() {
    const user = await prisma.users.create({
        data: {
            email: 'zalupa',
            password: '8544515',
        },
    });
    console.log(user);
}

export async function getAllUsers() {
    const users = await prisma.users.findMany;
    console.log(users);
}