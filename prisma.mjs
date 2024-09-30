import { PrismaClient } from '@prisma/client';
import fs from 'fs/promises';

const prisma = new PrismaClient();

async function main() {
  const data = await fs.readFile('./src/database/seeders.json', 'utf-8');
  const users = JSON.parse(data);
  console.log(users)
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
