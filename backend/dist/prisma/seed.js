"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const mock_data_1 = require("./mock-data");
const prisma = new client_1.PrismaClient();
async function main() {
    console.log('Cleaning up database...');
    await prisma.fee.deleteMany();
    await prisma.ledgerEntry.deleteMany();
    await prisma.investment.deleteMany();
    await prisma.deal.deleteMany();
    await prisma.asset.deleteMany();
    await prisma.entity.deleteMany();
    await prisma.identity.deleteMany();
    await prisma.newsArticle.deleteMany();
    await prisma.fileItem.deleteMany();
    await prisma.notification.deleteMany();
    await prisma.user.deleteMany();
    console.log('Seeding Users...');
    const userIds = [...new Set([mock_data_1.currentUser.id, ...mock_data_1.deals.map(d => d.fundManagerId)])];
    for (const id of userIds) {
        if (id === mock_data_1.currentUser.id) {
            await prisma.user.create({ data: { ...mock_data_1.currentUser, createdAt: new Date(mock_data_1.currentUser.createdAt) } });
        }
        else {
            await prisma.user.create({
                data: {
                    id,
                    email: `${id}@allo.com`,
                    name: `Manager ${id}`,
                    role: 'fund_manager',
                }
            });
        }
    }
    console.log('Seeding Assets...');
    for (const asset of mock_data_1.assets) {
        await prisma.asset.create({ data: { ...asset, createdAt: new Date(asset.createdAt) } });
    }
    console.log('Seeding Entities...');
    for (const entity of mock_data_1.entities) {
        await prisma.entity.create({
            data: {
                ...entity,
                createdAt: new Date(entity.createdAt),
                formationDate: entity.formationDate ? new Date(entity.formationDate) : null
            }
        });
    }
    console.log('Seeding Identities...');
    for (const identity of mock_data_1.identities) {
        await prisma.identity.create({ data: { ...identity, createdAt: new Date(identity.createdAt) } });
    }
    console.log('Seeding Deals...');
    for (const deal of mock_data_1.deals) {
        await prisma.deal.create({
            data: {
                ...deal,
                estimatedClosingDate: new Date(deal.estimatedClosingDate),
                createdAt: new Date(deal.createdAt),
                updatedAt: new Date(deal.updatedAt)
            }
        });
    }
    console.log('Seeding Investments...');
    for (const inv of mock_data_1.investments) {
        await prisma.investment.create({
            data: {
                ...inv,
                createdAt: new Date(inv.createdAt),
                signedAt: inv.signedAt ? new Date(inv.signedAt) : null
            }
        });
    }
    console.log('Seeding Ledger Entries...');
    for (const entry of mock_data_1.ledgerEntries) {
        await prisma.ledgerEntry.create({
            data: {
                ...entry,
                date: new Date(entry.date),
                createdAt: new Date(entry.createdAt)
            }
        });
    }
    console.log('Seeding Fees...');
    for (const fee of mock_data_1.fees) {
        await prisma.fee.create({
            data: {
                ...fee,
                dueDate: new Date(fee.dueDate),
                paidDate: fee.paidDate ? new Date(fee.paidDate) : null,
                createdAt: new Date(fee.createdAt)
            }
        });
    }
    console.log('Seeding News Articles...');
    for (const news of mock_data_1.newsArticles) {
        await prisma.newsArticle.create({
            data: {
                ...news,
                publishedAt: new Date(news.publishedAt)
            }
        });
    }
    console.log('Seeding Files...');
    for (const file of mock_data_1.files) {
        await prisma.fileItem.create({
            data: {
                ...file,
                uploadedAt: new Date(file.uploadedAt)
            }
        });
    }
    console.log('Seeding Notifications...');
    for (const notif of mock_data_1.notifications) {
        await prisma.notification.create({
            data: {
                ...notif,
                createdAt: new Date(notif.createdAt)
            }
        });
    }
    console.log('Database seeded successfully!');
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map