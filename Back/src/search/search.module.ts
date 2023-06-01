import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchController, SearchDifferentController} from './search.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Country} from "../entities/entities/Country";

@Module({
  imports:[TypeOrmModule.forFeature([Country])],
  controllers: [SearchController,SearchDifferentController],
  providers: [SearchService]
})
export class SearchModule {}
