/*
  Warnings:

  - The `endAt` column on the `Business` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `startAt` column on the `Business` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "public"."Business" DROP COLUMN "endAt",
ADD COLUMN     "endAt" TIMESTAMP(3),
DROP COLUMN "startAt",
ADD COLUMN     "startAt" TIMESTAMP(3);
