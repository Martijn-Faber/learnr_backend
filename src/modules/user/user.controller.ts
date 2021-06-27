import { Controller, Get, Logger, Param, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from '@/guards/jwt-auth.guard';

@Controller('users')
export class UserController extends Logger {
  constructor(private userService: UserService) {
    super();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  getUser(@Param() params) {
    return this.userService.getUser(params.id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:id/sets')
  getUserSets(@Param() params) {
    return this.userService.getUserSets(params.id);
  }
}
