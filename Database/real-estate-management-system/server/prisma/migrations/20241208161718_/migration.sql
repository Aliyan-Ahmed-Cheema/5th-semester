/*
  Warnings:

  - You are about to drop the column `description` on the `Agreement` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Agreement" DROP COLUMN "description",
ADD COLUMN     "duration" TEXT,
ADD COLUMN     "leaseAmount" DOUBLE PRECISION,
ADD COLUMN     "leaseTerms" TEXT,
ADD COLUMN     "price" DOUBLE PRECISION,
ADD COLUMN     "rentAmount" DOUBLE PRECISION,
ALTER COLUMN "startDate" DROP NOT NULL,
ALTER COLUMN "endDate" DROP NOT NULL,
ALTER COLUMN "paymentTerms" DROP NOT NULL;
