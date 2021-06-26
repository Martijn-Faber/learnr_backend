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
  getAllSets(@User() user) {
    return this.setService.getAllSets(user);
  }

  @Get('/:id')
  getSpecificSet(@Param() params) {
    return this.setService.getSpecificSet(params.id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  deleteSpecificSet(@User() user, @Param() params) {
    return this.setService.deleteSpecificSet(user, params.id);
  }
}
