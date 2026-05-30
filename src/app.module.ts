import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DealsModule } from './deals/deals.module';
import { SupabaseModule } from './supabase/supabase.module';
import { InvestmentsModule } from './investments/investments.module';
import { AssetsModule } from './assets/assets.module';
import { EntitiesModule } from './entities/entities.module';
import { IdentitiesModule } from './identities/identities.module';
import { NewsModule } from './news/news.module';
import { FilesModule } from './files/files.module';
import { NotificationsModule } from './notifications/notifications.module';
import { LedgerModule } from './ledger/ledger.module';
import { FeesModule } from './fees/fees.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { SupabaseAuthGuard } from './auth/supabase-auth.guard';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DealsModule, 
    SupabaseModule, 
    InvestmentsModule, 
    AssetsModule, 
    EntitiesModule, 
    IdentitiesModule, 
    NewsModule, 
    FilesModule, 
    NotificationsModule, 
    LedgerModule, 
    FeesModule, UsersModule, AuthModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: SupabaseAuthGuard,
    }
  ],
})
export class AppModule {}
