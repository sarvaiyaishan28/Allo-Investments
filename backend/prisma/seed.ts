import { PrismaClient } from '@prisma/client';
import { 
  currentUser, 
  deals, 
  investments, 
  assets, 
  entities, 
  identities, 
  newsArticles, 
  files, 
  notifications, 
  ledgerEntries, 
  fees 
} from './mock-data';

const prisma = new PrismaClient();

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
  const userIds = [...new Set([currentUser.id, ...deals.map(d => d.fundManagerId)])];
  
  for (const id of userIds) {
    if (id === currentUser.id) {
      await prisma.user.create({ data: { ...currentUser, createdAt: new Date(currentUser.createdAt) } });
    } else {
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
  for (const asset of assets) {
    await prisma.asset.create({ data: { ...asset, createdAt: new Date(asset.createdAt) } });
  }

  console.log('Seeding Entities...');
  for (const entity of entities) {
    await prisma.entity.create({ 
      data: { 
        ...entity, 
        createdAt: new Date(entity.createdAt),
        formationDate: entity.formationDate ? new Date(entity.formationDate) : null
      } 
    });
  }

  console.log('Seeding Identities...');
  for (const identity of identities) {
    await prisma.identity.create({ data: { ...identity, createdAt: new Date(identity.createdAt) } });
  }

  console.log('Seeding Deals...');
  for (const deal of deals) {
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
  for (const inv of investments) {
    await prisma.investment.create({ 
      data: { 
        ...inv, 
        createdAt: new Date(inv.createdAt),
        signedAt: inv.signedAt ? new Date(inv.signedAt) : null
      } 
    });
  }

  console.log('Seeding Ledger Entries...');
  for (const entry of ledgerEntries) {
    await prisma.ledgerEntry.create({ 
      data: { 
        ...entry,
        date: new Date(entry.date),
        createdAt: new Date(entry.createdAt)
      } 
    });
  }

  console.log('Seeding Fees...');
  for (const fee of fees) {
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
  for (const news of newsArticles) {
    await prisma.newsArticle.create({ 
      data: { 
        ...news,
        publishedAt: new Date(news.publishedAt)
      } 
    });
  }

  console.log('Seeding Files...');
  for (const file of files) {
    await prisma.fileItem.create({ 
      data: { 
        ...file,
        uploadedAt: new Date(file.uploadedAt)
      } 
    });
  }

  console.log('Seeding Notifications...');
  for (const notif of notifications) {
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
