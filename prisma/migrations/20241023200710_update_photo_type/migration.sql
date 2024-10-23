/*
  Warnings:

  - You are about to alter the column `photo` on the `events` table. The data in that column could be lost. The data in that column will be cast from `Blob` to `VarChar(1024)`.

*/
-- AlterTable
ALTER TABLE `events` MODIFY `photo` VARCHAR(1024) NULL;
