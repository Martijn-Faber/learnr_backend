/*
  Warnings:

  - You are about to drop the column `userId` on the `Set` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Set" DROP CONSTRAINT "Set_userId_fkey";

-- AlterTable
ALTER TABLE "Set" DROP COLUMN "userId",
ADD COLUMN     "authorId" TEXT;

-- AddForeignKey
ALTER TABLE "Set" ADD FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
