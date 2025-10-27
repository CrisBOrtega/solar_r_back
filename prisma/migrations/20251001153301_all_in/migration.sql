/*
  Warnings:

  - Made the column `token` on table `usuario` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "tipo_id" INTEGER NOT NULL,
    "token" TEXT NOT NULL,
    "estado_id" INTEGER NOT NULL DEFAULT 2,
    CONSTRAINT "usuario_tipo_id_fkey" FOREIGN KEY ("tipo_id") REFERENCES "tipo_usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "usuario_estado_id_fkey" FOREIGN KEY ("estado_id") REFERENCES "estado" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_usuario" ("email", "estado_id", "id", "password", "tipo_id", "token", "username") SELECT "email", "estado_id", "id", "password", "tipo_id", "token", "username" FROM "usuario";
DROP TABLE "usuario";
ALTER TABLE "new_usuario" RENAME TO "usuario";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
