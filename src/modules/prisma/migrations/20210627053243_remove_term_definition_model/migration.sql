/*
  Warnings:

  - You are about to drop the `Definition` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Term` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `term` to the `Pair` table without a default value. This is not possible if the table is not empty.
  - Added the required column `definition` to the `Pair` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Definition" DROP CONSTRAINT "Definition_pairId_fkey";

-- DropForeignKey
ALTER TABLE "Term" DROP CONSTRAINT "Term_pairId_fkey";

-- AlterTable
ALTER TABLE "Pair" ADD COLUMN     "term" TEXT NOT NULL,
ADD COLUMN     "definition" TEXT NOT NULL;

-- DropTable
DROP TABLE "Definition";

-- DropTable
DROP TABLE "Term";
