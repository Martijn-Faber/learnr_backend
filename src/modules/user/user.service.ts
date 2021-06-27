import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '@/modules/prisma/prisma.service';

@Injectable()
export class UserService extends Logger {
  constructor(private prisma: PrismaService) {
    super();
  }

  async getUser(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!user) {
      throw new HttpException(
        `cannot find user ${userId}`,
        HttpStatus.NOT_FOUND,
      );
    }

    return user;
  }

  async getUserSets(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        sets: true,
      },
    });

    if (!user) {
      throw new HttpException(
        `cannot find user ${userId}`,
        HttpStatus.NOT_FOUND,
      );
    }

    return user.sets;
  }
}
