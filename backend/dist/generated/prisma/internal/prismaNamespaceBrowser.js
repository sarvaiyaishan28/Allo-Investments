"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullsOrder = exports.QueryMode = exports.SortOrder = exports.FeeScalarFieldEnum = exports.LedgerEntryScalarFieldEnum = exports.IdentityScalarFieldEnum = exports.EntityScalarFieldEnum = exports.AssetScalarFieldEnum = exports.InvestmentScalarFieldEnum = exports.DealScalarFieldEnum = exports.UserScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = __importStar(require("@prisma/client/runtime/index-browser"));
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    User: 'User',
    Deal: 'Deal',
    Investment: 'Investment',
    Asset: 'Asset',
    Entity: 'Entity',
    Identity: 'Identity',
    LedgerEntry: 'LedgerEntry',
    Fee: 'Fee'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.UserScalarFieldEnum = {
    id: 'id',
    email: 'email',
    name: 'name',
    avatar: 'avatar',
    role: 'role',
    walletAddress: 'walletAddress',
    createdAt: 'createdAt'
};
exports.DealScalarFieldEnum = {
    id: 'id',
    name: 'name',
    entityName: 'entityName',
    status: 'status',
    type: 'type',
    productType: 'productType',
    managementFee: 'managementFee',
    carry: 'carry',
    targetRaise: 'targetRaise',
    minimumInvestment: 'minimumInvestment',
    totalSigned: 'totalSigned',
    totalWired: 'totalWired',
    investorCount: 'investorCount',
    estimatedClosingDate: 'estimatedClosingDate',
    offeringType: 'offeringType',
    memo: 'memo',
    pitchDeckUrl: 'pitchDeckUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    fundManagerId: 'fundManagerId',
    assetId: 'assetId'
};
exports.InvestmentScalarFieldEnum = {
    id: 'id',
    dealId: 'dealId',
    dealName: 'dealName',
    investorId: 'investorId',
    investorName: 'investorName',
    investorEmail: 'investorEmail',
    investorType: 'investorType',
    status: 'status',
    kycStatus: 'kycStatus',
    subscriptionAmount: 'subscriptionAmount',
    capitalWired: 'capitalWired',
    managementFee: 'managementFee',
    carry: 'carry',
    createdAt: 'createdAt',
    signedAt: 'signedAt'
};
exports.AssetScalarFieldEnum = {
    id: 'id',
    legalName: 'legalName',
    type: 'type',
    industry: 'industry',
    location: 'location',
    securityType: 'securityType',
    totalShares: 'totalShares',
    sharePrice: 'sharePrice',
    filesCount: 'filesCount',
    createdAt: 'createdAt'
};
exports.EntityScalarFieldEnum = {
    id: 'id',
    name: 'name',
    type: 'type',
    structure: 'structure',
    masterEntityId: 'masterEntityId',
    masterEntityName: 'masterEntityName',
    state: 'state',
    ein: 'ein',
    address: 'address',
    registeredAgent: 'registeredAgent',
    formationDate: 'formationDate',
    createdAt: 'createdAt'
};
exports.IdentityScalarFieldEnum = {
    id: 'id',
    name: 'name',
    type: 'type',
    email: 'email',
    phone: 'phone',
    accreditationStatus: 'accreditationStatus',
    kycStatus: 'kycStatus',
    createdAt: 'createdAt'
};
exports.LedgerEntryScalarFieldEnum = {
    id: 'id',
    dealId: 'dealId',
    dealName: 'dealName',
    type: 'type',
    description: 'description',
    amount: 'amount',
    status: 'status',
    date: 'date',
    createdAt: 'createdAt'
};
exports.FeeScalarFieldEnum = {
    id: 'id',
    dealId: 'dealId',
    dealName: 'dealName',
    type: 'type',
    description: 'description',
    amount: 'amount',
    status: 'status',
    dueDate: 'dueDate',
    paidDate: 'paidDate',
    createdAt: 'createdAt'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map