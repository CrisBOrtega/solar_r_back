/*
  Warnings:

  - Added the required column `estado_id` to the `usuario` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "estado" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "tipo_id" INTEGER NOT NULL,
    "estado_id" INTEGER NOT NULL,
    CONSTRAINT "usuario_tipo_id_fkey" FOREIGN KEY ("tipo_id") REFERENCES "tipo_usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "usuario_estado_id_fkey" FOREIGN KEY ("estado_id") REFERENCES "estado" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_usuario" ("id", "password", "tipo_id", "username") SELECT "id", "password", "tipo_id", "username" FROM "usuario";
DROP TABLE "usuario";
ALTER TABLE "new_usuario" RENAME TO "usuario";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
