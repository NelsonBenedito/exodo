/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `Business` table. All the data in the column will be lost.
  - Added the required column `imageId` to the `Business` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Business" DROP COLUMN "imageUrl",
ADD COLUMN     "imageId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "public"."Image" (
    "id" TEXT NOT NULL,
    "filename" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "uploadedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Business" ADD CONSTRAINT "Business_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "public"."Image"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
