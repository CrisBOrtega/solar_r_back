/*
  Warnings:

  - You are about to drop the `tecnologia_hardware` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tecnologia_software` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "tecnologia_hardware";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "tecnologia_software";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "tecnologia" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tecnologia" TEXT NOT NULL,
    "proyecto_id" INTEGER NOT NULL,
    "tipo" BOOLEAN NOT NULL,
    CONSTRAINT "tecnologia_proyecto_id_fkey" FOREIGN KEY ("proyecto_id") REFERENCES "proyecto" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
