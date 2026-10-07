-- CreateEnum
CREATE TYPE "Role" AS ENUM ('SUPERVISOR', 'ADMIN', 'USER');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER';
