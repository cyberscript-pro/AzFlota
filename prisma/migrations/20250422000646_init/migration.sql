-- CreateEnum
CREATE TYPE "State" AS ENUM ('Active', 'Inactive', 'Blocked', 'Expired');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('DIRECTOR', 'INFORMATICO', 'ECONOMICO');

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "nickname" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'ECONOMICO',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isAvailable" BOOLEAN NOT NULL DEFAULT true,
    "lastLogin" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "choferes" (
    "uuid" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "ci" TEXT NOT NULL,
    "licencia" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isAvailable" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "choferes_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "areas-trabajo" (
    "uuid" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "isAvailable" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "areas-trabajo_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "tarjetas-combustible" (
    "uuid" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "pin" INTEGER NOT NULL,
    "estado" "State" NOT NULL DEFAULT 'Active',
    "fecha_vencimiento" TIMESTAMP(3) NOT NULL,
    "isAvailable" BOOLEAN NOT NULL DEFAULT true,
    "vehiculoUuid" TEXT,

    CONSTRAINT "tarjetas-combustible_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "vehiculos" (
    "uuid" TEXT NOT NULL,
    "chapa" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "jefe" TEXT NOT NULL,
    "isAvailable" BOOLEAN NOT NULL DEFAULT true,
    "areaTrabajoUuid" TEXT NOT NULL,
    "choferUuid" TEXT,

    CONSTRAINT "vehiculos_pkey" PRIMARY KEY ("uuid")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_nickname_key" ON "users"("nickname");

-- CreateIndex
CREATE UNIQUE INDEX "tarjetas-combustible_vehiculoUuid_key" ON "tarjetas-combustible"("vehiculoUuid");

-- AddForeignKey
ALTER TABLE "tarjetas-combustible" ADD CONSTRAINT "tarjetas-combustible_vehiculoUuid_fkey" FOREIGN KEY ("vehiculoUuid") REFERENCES "vehiculos"("uuid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vehiculos" ADD CONSTRAINT "vehiculos_areaTrabajoUuid_fkey" FOREIGN KEY ("areaTrabajoUuid") REFERENCES "areas-trabajo"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vehiculos" ADD CONSTRAINT "vehiculos_choferUuid_fkey" FOREIGN KEY ("choferUuid") REFERENCES "choferes"("uuid") ON DELETE SET NULL ON UPDATE CASCADE;
