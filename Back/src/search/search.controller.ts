import {Controller, Get, Post, Body, Patch, Param, Delete, Query} from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get('tour')
  searchTour(@Query()params){
    return this.searchService.searchTour(params.name, params.dateFrom, params.dateTo)
  }

  @Get('city')
  searchCity(@Query()params){
    console.log(params)
    return this.searchService.searchCity(params.name, params.dateFrom, params.dateTo)
  }

  @Get('hotels')
  searchHotels(@Query()params){
    console.log(params)
    return this.searchService.searchHotels(params.name, params.dateFrom, params.dateTo,params.peoples)
  }

  @Get(':str')
  findOne(@Param('str') str: string) {
    return this.searchService.search(str);
  }
}
@Controller('search-different')
export class SearchDifferentController {
  constructor(private readonly searchService: SearchService) {}
  @Get()
  findOne(@Query()params) {
    return this.searchService.searchDifferentResult(params.name)
  }

}
