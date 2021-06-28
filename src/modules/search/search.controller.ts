import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { SearchService } from './search.service';
import { JwtAuthGuard } from '../../guards/jwt-auth.guard';

@Controller('search')
export class SearchController {
  constructor(private searchService: SearchService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  search(@Query() queries) {
    return this.searchService.search(queries.q);
  }
}
