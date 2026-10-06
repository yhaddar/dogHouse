-- AlterTable
ALTER TABLE "User" ADD COLUMN     "email_verified" TIMESTAMP(3),
ALTER COLUMN "profile" DROP NOT NULL,
ALTER COLUMN "profile" SET DEFAULT 'users/default.jpeg';
