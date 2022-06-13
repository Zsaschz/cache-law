-- CreateTable
CREATE TABLE "User" (
    "npm" INTEGER NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_npm_key" ON "User"("npm");
