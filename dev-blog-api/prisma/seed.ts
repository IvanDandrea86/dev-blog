import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import * as faker from 'faker';

const prisma = new PrismaClient();

async function main() {
  await prisma.post.deleteMany();
  await prisma.user.deleteMany();
  //Users
  const hashPassword = await bcrypt.hash('Qwerty1Q', 8);
  const user = await prisma.user.create({
    data: {
      email: 'ivan.d.andrea1@gmail.com',
      password: hashPassword,
      role: 'ADMIN',
    },
  });
  console.log({ user });
  //Post
  for (let i = 0; i <= 30; i += 1) {
    const post = await prisma.post.create({
      data: {
        title: faker.lorem.words(3),
        content: faker.lorem.paragraphs(15),
        // authorId: user.id,
        author: { connect: { id: user.id } },
      },
    });
    console.log({ post });
  }
}
//Categories

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
