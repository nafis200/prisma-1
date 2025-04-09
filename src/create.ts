import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    // const createUser = await prisma.user.create({
    //     data: {
    //         username: "user3",
    //         email: "user1@ph.com",
    //         role: UserRole.user
    //     }
    // });

    // console.log(createUser)

    // const createProfile = await prisma.profile.create({
    //     data: {
    //         bio: "this is bio...",
    //         userId: 2
    //     }
    // })
    // console.log(createProfile)

    // const createCategory = await prisma.category.create({
    //     data: {
    //         name: "programming"
    //     }
    // })

    // console.log(createCategory)

    const createPost = await prisma.post.create({
        data: {
            title: "this is title 5",
            content: "this is content of the post. 5",
            authorId: 3,
            // postCategory na dileo hobe
            postCategory: {
                create: [
                    {
                        categoryId: 1
                    },
                    {
                        categoryId: 2
                    },
                    
                ]
            }
        },
        include: {
            postCategory: true
        }
    })
    console.log(createPost)
}

main();

// const createMany = await prisma.post.createMany({data:[]})