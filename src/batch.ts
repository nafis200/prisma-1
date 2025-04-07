import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const batchTransaction = async () => {
    const createUser =  prisma.user.create({
        data: {
            username: "jhankar3",
            email: "jkr@ph.com",
        }
    });

    // console.log(createUser,"create")


    const updateUser = prisma.user.update({
        where: {
            id: 1
        },
        data: {
            age: 100
        }
    });

    // console.log(updateUser)

    const [userData, updateData] = await prisma.$transaction([
        createUser,
        updateUser
    ]);

    console.log(userData, updateData);
};

batchTransaction();