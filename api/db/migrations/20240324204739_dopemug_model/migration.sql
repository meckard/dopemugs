-- CreateTable
CREATE TABLE "UserExample" (
    "id" SERIAL NOT NULL,
    "imageURL" TEXT NOT NULL,
    "name" TEXT,
    "madeBy" TEXT NOT NULL,

    CONSTRAINT "UserExample_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserExample_imageURL_key" ON "UserExample"("imageURL");
