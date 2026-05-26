import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DealsModule } from './deals/deals.module';
import { PrismaModule } from './prisma/prisma.module';
import { InvestmentsModule } from './investments/investments.module';
import { AssetsModule } from './assets/assets.module';
import { EntitiesModule } from './entities/entities.module';
import { IdentitiesModule } from './identities/identities.module';
import { NewsModule } from './news/news.module';
import { FilesModule } from './files/files.module';
import { NotificationsModule } from './notifications/notifications.module';
import { LedgerModule } from './ledger/ledger.module';
import { FeesModule } from './fees/fees.module';

@Module({
  imports: [DealsModule, PrismaModule, InvestmentsModule, AssetsModule, EntitiesModule, IdentitiesModule, NewsModule, FilesModule, NotificationsModule, LedgerModule, FeesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
