/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Profile` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fkey";

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "githubUrl" TEXT,
ADD COLUMN     "profileImageUrl" TEXT DEFAULT 'https://www.pngfind.com/pngs/m/676-6764065_default-profile-picture-transparent-hd-png-download.png',
ALTER COLUMN "bio" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
