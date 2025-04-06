
1. prisma docs

2. start from scratch

3. Relational database

4. npm init -y

5. npm install prisma typescript tsx @types/node --save-dev

6. npx tsc --init.

7. npx prisma

8. npx prisma init

9. tsconfig e rootdir e uncomment korte hobe and src lekte hobe

10. connect prisma

11. schema.prisma te pura file save kori.

model Post {
  id        Int      @id @default(autoincrement())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  title     String   @db.VarChar(255)
  content   String?
  published Boolean  @default(false)
  author    User     @relation(fields: [authorId], references: [id])
  authorId  Int
}

model Profile {
  id     Int     @id @default(autoincrement())
  bio    String?
  user   User    @relation(fields: [userId], references: [id])
  userId Int     @unique
}

model User {
  id      Int      @id @default(autoincrement())
  email   String   @unique
  name    String?
  posts   Post[]
  profile Profile?
}

12. npx prisma migrate dev --name init

<!-- npx prisma migrate dev --name relation
 -->

 create relationTable

13. Create model at schema.prisma

prisma ---> schema.prisma


<!-- ................ -->

14. npx prisma migrate dev

<!-- .............. -->

15.  @@map("posts") update table

16. npm i ts-node-dev

17. npm i ts-node-dev --save-dev

18.  "dev": "ts-node-dev --respawn --transpile-only src/raw-query.ts"

19. npm install @prisma/client

20. index.ts e kaj korbo 

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

21. npx prisma studio.

22. find.ts

   const findFirst = await prisma.post.findFirstOrThrow({
        where: {
            published: false
        }
    });

23. create.ts e many data input korte hobe

24. update.ts

25. delete prisma

26. upsert prisma work at update.ts.

27. find.ts e select options

28. implementing Pagination and sorting.

29. pagination-sorting.ts 

30. cursorBased means koto number data theke skip korbe.

 const cursorData = await prisma.post.findMany({
        skip: 5,
        take: 2,
        cursor: {
            id: 15
        }
    })

15 theke 5 skip kore 20 and 21 nibe.

31. sorting data

<!-- 54.1 -->

RelationShips

Each user can have one profile

Each user can have multiple posts

Each post can have multiple category and each category can have multiple post.

<!-- 54-2 -->

User and profile

one to one relationship