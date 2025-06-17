/*
  Warnings:

  - A unique constraint covering the columns `[name,lname]` on the table `Student` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `lname` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `student` ADD COLUMN `lname` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Student_name_lname_key` ON `Student`(`name`, `lname`);
