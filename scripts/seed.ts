import prisma from '../lib/prisma';

async function main() {
  const name = 'Epcot International Food & Wine Festival 2024';
  const start = new Date('2024-07-27');
  const end = new Date('2024-11-23');

  // Festival (idempotent; uses composite unique)
  const festival = await prisma.festival.upsert({
    where: { name_startDate: { name, startDate: start } },
    update: {
      parkName: 'Epcot',
      endDate: end,
    },
    create: {
      name,
      parkName: 'Epcot',
      startDate: start,
      endDate: end,
    },
  });

  // Booth (name is unique)
  const booth = await prisma.booth.upsert({
    where: { name: 'Australia' },
    update: { area: 'World Showcase' },
    create: { name: 'Australia', area: 'World Showcase' },
  });

  // Link booth to festival (composite unique)
  await prisma.festivalBoothInstance.upsert({
    where: { festivalId_boothId: { festivalId: festival.id, boothId: booth.id } },
    update: {},
    create: { festivalId: festival.id, boothId: booth.id },
  });

  console.log('Seed complete');
}

main()
  .catch((e) => { console.error('Seed error:', e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
