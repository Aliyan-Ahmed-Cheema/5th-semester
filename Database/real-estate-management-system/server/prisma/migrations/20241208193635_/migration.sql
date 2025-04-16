/*
  Warnings:

  - You are about to drop the column `endDate` on the `Agreement` table. All the data in the column will be lost.
  - You are about to drop the column `paymentTerms` on the `Agreement` table. All the data in the column will be lost.
  - You are about to drop the column `startDate` on the `Agreement` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Agreement` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Agreement" DROP CONSTRAINT "Agreement_clientId_fkey";

-- DropForeignKey
ALTER TABLE "Agreement" DROP CONSTRAINT "Agreement_dealerId_fkey";

-- DropForeignKey
ALTER TABLE "Agreement" DROP CONSTRAINT "Agreement_propertyId_fkey";

-- DropForeignKey
ALTER TABLE "Listing" DROP CONSTRAINT "Listing_dealerId_fkey";

-- AlterTable
ALTER TABLE "Agreement" DROP COLUMN "endDate",
DROP COLUMN "paymentTerms",
DROP COLUMN "startDate",
DROP COLUMN "status";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "image";

-- DropEnum
DROP TYPE "AgreementStatus";

-- AddForeignKey
ALTER TABLE "Listing" ADD CONSTRAINT "Listing_dealerId_fkey" FOREIGN KEY ("dealerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Agreement" ADD CONSTRAINT "Agreement_dealerId_fkey" FOREIGN KEY ("dealerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Agreement" ADD CONSTRAINT "Agreement_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Agreement" ADD CONSTRAINT "Agreement_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Listing"("id") ON DELETE CASCADE ON UPDATE CASCADE;
