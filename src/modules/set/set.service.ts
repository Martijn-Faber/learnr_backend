import { Injectable, Logger, HttpException, HttpStatus } from '@nestjs/common';
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

  async getAllSets(user) {
    const sets = await this.prisma.set.findMany({
      where: {
        authorId: user.id,
      },
    });

    return sets;
  }

  async getSpecificSet(setId: string) {
    const set = await this.prisma.set.findUnique({
      where: {
        id: setId,
      },
    });

    if (!set) {
      throw new HttpException(`cannot find set ${setId}`, HttpStatus.NOT_FOUND);
    }

    return set;
  }

  async deleteSpecificSet(user, setId: string) {
    const set = await this.prisma.set.findFirst({
      where: {
        id: setId,
        authorId: user.id,
      },
      select: {
        id: true,
      },
    });

    if (!set) {
      throw new HttpException(`cannot find set ${setId}`, HttpStatus.NOT_FOUND);
    }

    await this.prisma.set.delete({
      where: {
        id: set.id,
      },
    });

    return {
      message: `set ${set.id} succesfully deleted`,
    };
  }
}
