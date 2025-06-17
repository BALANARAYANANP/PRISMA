/*
  Warnings:

  - Added the required column `userId` to the `Books` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `books` ADD COLUMN `userId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Books` ADD CONSTRAINT `Books_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Student`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
