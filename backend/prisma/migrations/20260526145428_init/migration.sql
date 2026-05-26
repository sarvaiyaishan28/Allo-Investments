-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "avatar" TEXT,
    "role" TEXT NOT NULL,
    "walletAddress" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Deal" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "entityName" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "productType" TEXT NOT NULL,
    "managementFee" DOUBLE PRECISION NOT NULL,
    "carry" DOUBLE PRECISION NOT NULL,
    "targetRaise" DOUBLE PRECISION NOT NULL,
    "minimumInvestment" DOUBLE PRECISION NOT NULL,
    "totalSigned" DOUBLE PRECISION NOT NULL,
    "totalWired" DOUBLE PRECISION NOT NULL,
    "investorCount" INTEGER NOT NULL,
    "estimatedClosingDate" TIMESTAMP(3) NOT NULL,
    "offeringType" TEXT NOT NULL,
    "memo" TEXT,
    "pitchDeckUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "fundManagerId" TEXT NOT NULL,
    "assetId" TEXT,

    CONSTRAINT "Deal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Investment" (
    "id" TEXT NOT NULL,
    "dealId" TEXT NOT NULL,
    "dealName" TEXT NOT NULL,
    "investorId" TEXT NOT NULL,
    "investorName" TEXT NOT NULL,
    "investorEmail" TEXT NOT NULL,
    "investorType" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "kycStatus" TEXT NOT NULL,
    "subscriptionAmount" DOUBLE PRECISION NOT NULL,
    "capitalWired" DOUBLE PRECISION NOT NULL,
    "managementFee" DOUBLE PRECISION NOT NULL,
    "carry" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "signedAt" TIMESTAMP(3),

    CONSTRAINT "Investment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Asset" (
    "id" TEXT NOT NULL,
    "legalName" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "industry" TEXT,
    "location" TEXT NOT NULL,
    "securityType" TEXT NOT NULL,
    "totalShares" DOUBLE PRECISION,
    "sharePrice" DOUBLE PRECISION,
    "filesCount" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Asset_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Entity" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "structure" TEXT NOT NULL,
    "masterEntityId" TEXT,
    "masterEntityName" TEXT,
    "state" TEXT NOT NULL,
    "ein" TEXT,
    "address" TEXT NOT NULL,
    "registeredAgent" TEXT,
    "formationDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Entity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Identity" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "accreditationStatus" TEXT NOT NULL,
    "kycStatus" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Identity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LedgerEntry" (
    "id" TEXT NOT NULL,
    "dealId" TEXT NOT NULL,
    "dealName" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "status" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LedgerEntry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fee" (
    "id" TEXT NOT NULL,
    "dealId" TEXT NOT NULL,
    "dealName" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "status" TEXT NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "paidDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Fee_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Investment" ADD CONSTRAINT "Investment_dealId_fkey" FOREIGN KEY ("dealId") REFERENCES "Deal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LedgerEntry" ADD CONSTRAINT "LedgerEntry_dealId_fkey" FOREIGN KEY ("dealId") REFERENCES "Deal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fee" ADD CONSTRAINT "Fee_dealId_fkey" FOREIGN KEY ("dealId") REFERENCES "Deal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
