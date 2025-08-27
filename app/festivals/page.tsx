import prisma from '../../lib/prisma';
import Link from 'next/link';

export default async function FestivalsPage() {
  const festivals = await prisma.festival.findMany({
    orderBy: { startDate: 'desc' },
  });

  return (
    <main className="p-6 space-y-4">
      <h1 className="text-3xl font-bold">Festivals</h1>
      {festivals.length === 0 ? (
        <p className="text-gray-500">No festivals found. Try seeding the DB.</p>
      ) : (
        <ul className="space-y-2">
          {festivals.map((f) => (
            <li key={f.id} className="border rounded p-3 hover:bg-gray-50">
              <div className="font-medium">
                <Link
                  href={`/festivals/${f.id}`}
                  className="underline hover:no-underline"
                >
                  {f.name}
                </Link>
              </div>
              <div className="text-sm opacity-80">
                {f.parkName} —{' '}
                {new Date(f.startDate).toLocaleDateString()} to{' '}
                {new Date(f.endDate).toLocaleDateString()}
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
