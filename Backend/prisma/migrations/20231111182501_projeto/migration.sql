-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "ingredient" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "energetic" INTEGER NOT NULL,
    "protein" DECIMAL NOT NULL,
    "carb" DECIMAL NOT NULL,
    "fat" DECIMAL NOT NULL,
    "sodium" DECIMAL NOT NULL,
    "cod_barras" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
