-- CreateEnum
CREATE TYPE "Status" AS ENUM ('IN_PROGRESS', 'SUCCESS', 'ERROR');

-- CreateTable
CREATE TABLE "email" (
    "id" SERIAL NOT NULL,
    "rawText" TEXT NOT NULL,
    "receivedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "Status" NOT NULL DEFAULT 'IN_PROGRESS',

    CONSTRAINT "email_pkey" PRIMARY KEY ("id")
);
