import prisma from '../lib/prisma';

async function main() {
  const festival = await prisma.festival.create({
    data: {
      name: 'Epcot International Food & Wine Festival 2024',
      parkName: 'Epcot',
      startDate: new Date('2024-07-27'),
      endDate: new Date('2024-11-23'),
    },
  });

  const booth = await prisma.booth.create({
    data: { name: 'Australia', area: 'World Showcase' },
  });

  await prisma.festivalBoothInstance.create({
    data: { festivalId: festival.id, boothId: booth.id },
  });

  console.log('Seed complete');
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
