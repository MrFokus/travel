import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}
  //
  // @Post()
  // create(@Body() createSearchDto: CreateSearchDto) {
  //   return this.searchService.create(createSearchDto);
  // }

  // @Get()
  // findAll() {
  //   return this.searchService.findAll();
  // }

  @Get(':str')
  findOne(@Param('str') str: string) {
    return this.searchService.search(str);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateSearchDto: UpdateSearchDto) {
  //   return this.searchService.update(+id, updateSearchDto);
  // }
  //
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.searchService.remove(+id);
  // }
}
