/*
  Warnings:

  - You are about to drop the `UserExample` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "UserExample";

-- CreateTable
CREATE TABLE "DopeMug" (
    "id" SERIAL NOT NULL,
    "imageURL" TEXT NOT NULL,
    "name" TEXT,
    "madeBy" TEXT NOT NULL,
    "submittedBy" TEXT NOT NULL,

    CONSTRAINT "DopeMug_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DopeMug_imageURL_key" ON "DopeMug"("imageURL");
