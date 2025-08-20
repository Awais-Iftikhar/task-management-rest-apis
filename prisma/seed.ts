import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const tasks = await prisma.task.createMany({
    data: [
      {
        title: 'Develop API',
        description: 'Use Javascript',
        status: 'completed',
      },
      {
        title: 'Develop Frontend',
        description: 'Create Webapp using react',
        status: 'completed',
      },
    ],
  });

  console.log(`Created ${tasks.count} tasks`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
