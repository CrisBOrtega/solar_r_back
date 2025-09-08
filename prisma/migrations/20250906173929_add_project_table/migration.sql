-- CreateTable
CREATE TABLE "proyecto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "tipo_energia" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "paso" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "paso" TEXT NOT NULL,
    "proyecto_id" INTEGER NOT NULL,
    CONSTRAINT "paso_proyecto_id_fkey" FOREIGN KEY ("proyecto_id") REFERENCES "proyecto" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
