/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Booth` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,startDate]` on the table `Festival` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[festivalId,boothId]` on the table `FestivalBoothInstance` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Booth_name_key" ON "Booth"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Festival_name_startDate_key" ON "Festival"("name", "startDate");

-- CreateIndex
CREATE UNIQUE INDEX "FestivalBoothInstance_festivalId_boothId_key" ON "FestivalBoothInstance"("festivalId", "boothId");
