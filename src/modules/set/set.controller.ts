import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { SetService } from './set.service';
import { User } from '@/decorators/user.decorator';
import { JwtAuthGuard } from '@/guards/jwt-auth.guard';
import { PairService } from '@/modules/pair/pair.service';
import { CreatePairDto } from '@/modules/pair/dto/create-pair.dto';

@Controller('sets')
export class SetController {
  constructor(
    private setService: SetService,
    private pairService: PairService,
  ) {}

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

  @UseGuards(JwtAuthGuard)
  @Put('/:id')
  updateSet(@User() user, @Param() params, @Body() body) {
    return this.setService.updateSet(user, params.id, body);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/:id/pairs')
  createPair(@Param() params, @Body() body) {
    return this.pairService.createPair(params.id, body);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/:id/pairs/:pairId')
  deletePair(@User() user, @Param() params) {
    return this.pairService.deletePair(user, params.id, params.pairId);
  }

  @UseGuards(JwtAuthGuard)
  @Put('/:id/pairs/:pairId')
  updatePair(@User() user, @Param() params, @Body() body) {
    return this.pairService.updatePair(user, params.id, params.pairId, body);
  }
}
