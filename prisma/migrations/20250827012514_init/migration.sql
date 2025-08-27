-- CreateTable
CREATE TABLE "Festival" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "parkName" TEXT NOT NULL,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Booth" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "area" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "FestivalBoothInstance" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "festivalId" INTEGER NOT NULL,
    "boothId" INTEGER NOT NULL,
    CONSTRAINT "FestivalBoothInstance_festivalId_fkey" FOREIGN KEY ("festivalId") REFERENCES "Festival" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "FestivalBoothInstance_boothId_fkey" FOREIGN KEY ("boothId") REFERENCES "Booth" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
