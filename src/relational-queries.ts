import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const relationalQueries = async () => {

    // fluent api
    // const result = await prisma.user.findUnique({
    //     where: {
    //         id: 2
    //     }
    // }).profile();

    const result = await prisma.user.findUnique({
        where: {
            id: 2
        },
        include:{
            profile:true
        }
    })

    // console.log(result)


    // relational fillters
    const publishedPostUsers = await prisma.user.findMany({
        include: {
            post: {
                where: {
                    published: true
                }
            }
        }
    })
    console.dir(publishedPostUsers, { depth: Infinity })
};

relationalQueries();