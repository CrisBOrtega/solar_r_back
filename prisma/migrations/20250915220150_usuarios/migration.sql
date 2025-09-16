-- CreateTable
CREATE TABLE "tipo_usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tipo" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "tipo_id" INTEGER NOT NULL,
    CONSTRAINT "usuario_tipo_id_fkey" FOREIGN KEY ("tipo_id") REFERENCES "tipo_usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "usuario_creacion_proyecto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "usuario_id" INTEGER NOT NULL,
    "proyecto_id" INTEGER NOT NULL,
    CONSTRAINT "usuario_creacion_proyecto_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "usuario_creacion_proyecto_proyecto_id_fkey" FOREIGN KEY ("proyecto_id") REFERENCES "proyecto" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
