-- DropIndex
DROP INDEX "users_password_key";

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "email" SET DATA TYPE TEXT,
ALTER COLUMN "password" SET DATA TYPE TEXT,
ALTER COLUMN "phone" SET DATA TYPE TEXT;
