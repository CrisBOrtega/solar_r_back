-- CreateTable
CREATE TABLE "tecnologia_software" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tecnologia" TEXT NOT NULL,
    "proyecto_id" INTEGER NOT NULL,
    CONSTRAINT "tecnologia_software_proyecto_id_fkey" FOREIGN KEY ("proyecto_id") REFERENCES "proyecto" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "tecnologia_hardware" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tecnologia" TEXT NOT NULL,
    "proyecto_id" INTEGER NOT NULL,
    CONSTRAINT "tecnologia_hardware_proyecto_id_fkey" FOREIGN KEY ("proyecto_id") REFERENCES "proyecto" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "recurso" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "valor" DECIMAL NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "proyecto_id" INTEGER NOT NULL,
    CONSTRAINT "recurso_proyecto_id_fkey" FOREIGN KEY ("proyecto_id") REFERENCES "proyecto" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
