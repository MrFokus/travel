import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CityModule } from './city/city.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserModule} from "./user/user.module";
import { SearchModule } from './search/search.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [TypeOrmModule.forRoot({
    "name": "default",
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "german",
    "password": "",
    "database": "tour",
    "synchronize": false,
    "entities": ["entities/*.js"]
  }),CityModule,UserModule, SearchModule],
})
export class AppModule {}
