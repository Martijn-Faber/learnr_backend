import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { SetService } from './set.service';
import { User } from '@/decorators/user.decorator';
import { JwtAuthGuard } from '@/guards/jwt-auth.guard';

@Controller('sets')
export class SetController {
  constructor(private setService: SetService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  createSet(@User() user, @Body() body) {
    return this.setService.createSet(user, body);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getSets(@User() user) {
    return this.setService.getSets(user);
  }

  @Get('/:id')
  getSet(@Param() params) {
    return this.setService.getSet(params.id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  deleteSet(@User() user, @Param() params) {
    return this.setService.deleteSet(user, params.id);
  }
}
