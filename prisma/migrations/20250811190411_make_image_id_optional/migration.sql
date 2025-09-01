-- DropForeignKey
ALTER TABLE "public"."Business" DROP CONSTRAINT "Business_imageId_fkey";

-- AlterTable
ALTER TABLE "public"."Business" ALTER COLUMN "imageId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Business" ADD CONSTRAINT "Business_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "public"."Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;
