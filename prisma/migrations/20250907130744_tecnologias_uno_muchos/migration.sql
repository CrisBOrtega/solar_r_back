/*
  Warnings:

  - You are about to drop the column `proyecto_id` on the `tecnologia` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "tecnologia_proyecto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "proyecto_id" INTEGER NOT NULL,
    "tecnologia_id" INTEGER NOT NULL,
    CONSTRAINT "tecnologia_proyecto_proyecto_id_fkey" FOREIGN KEY ("proyecto_id") REFERENCES "proyecto" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "tecnologia_proyecto_tecnologia_id_fkey" FOREIGN KEY ("tecnologia_id") REFERENCES "tecnologia" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_tecnologia" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tecnologia" TEXT NOT NULL,
    "tipo" BOOLEAN NOT NULL
);
INSERT INTO "new_tecnologia" ("id", "tecnologia", "tipo") SELECT "id", "tecnologia", "tipo" FROM "tecnologia";
DROP TABLE "tecnologia";
ALTER TABLE "new_tecnologia" RENAME TO "tecnologia";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
