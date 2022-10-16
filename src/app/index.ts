import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration } from 'src/config';
import {
  UserModule,
  AuthModule,
  ProductModule,
  CategoryModule,
  ReviewModule,
  OrderModule,
  CartModule,
} from 'src/modules';
import { AppController } from './app.controller';

import { APP_GUARD, APP_FILTER } from '@nestjs/core';
import { AccessTokenGuard, RolesGuard } from 'src/guards';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<'string'>('mongodb_uri'),
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    ReviewModule,
    ProductModule,
    CartModule,
    CategoryModule,
    OrderModule,
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `src/config/envs/dev.env`,
      load: [configuration],
    }),
  ],
  providers: [
    AppService,
    // { provide: APP_FILTER, useClass: TestFilter },
    // {
    //   provide: APP_GUARD,
    //   useClass: AccessTokenGuard,
    // },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
  controllers: [AppController],
})
export class AppModule {}
