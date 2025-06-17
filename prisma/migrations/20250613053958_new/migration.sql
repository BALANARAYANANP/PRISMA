/*
  Warnings:

  - Added the required column `content` to the `Employess` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `employess` ADD COLUMN `content` TEXT NOT NULL;
