import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSetDto } from './dto/create-set.dto';

@Injectable()
export class SetService extends Logger {
  constructor(private prisma: PrismaService) {
    super();
  }

  async createSet(user, body: CreateSetDto) {
    const set = await this.prisma.set.create({
      data: {
        title: body.title,
        description: body.description,
        authorId: user.id,
      },
    });

    return set;
  }
}
