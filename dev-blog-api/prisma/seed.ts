import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  const hashPassword = await bcrypt.hash('Qwerty1Q', 8);
  const user = await prisma.user.create({
    data: {
      email: 'ivan.d.andrea1@gmail.com',
      password: hashPassword,
      role: 'ADMIN',
    },
  });
  console.log({ user });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
