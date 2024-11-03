/*
  Warnings:

  - Added the required column `address` to the `event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endDateTime` to the `event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `link` to the `event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `organization` to the `event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDateTime` to the `event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "event" ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "endDateTime" TEXT NOT NULL,
ADD COLUMN     "link" TEXT NOT NULL,
ADD COLUMN     "organization" TEXT NOT NULL,
ADD COLUMN     "startDateTime" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;
