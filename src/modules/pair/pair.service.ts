import { Injectable, Logger, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from '@/modules/prisma/prisma.service';
import { CreatePairDto } from './dto/create-pair.dto';
import { UpdatePairDto } from './dto/update-pair.dto';

@Injectable()
export class PairService extends Logger {
  constructor(private prisma: PrismaService) {
    super();
  }

  async createPair(setId: string, body: CreatePairDto) {
    const { term, definition } = body;
    const pair = await this.prisma.pair.create({
      data: {
        term,
        definition,
        setId,
      },
    });

    return pair;
  }

  async deletePair(user, setId: string, pairId: string) {
    const pair = await this.prisma.pair.findFirst({
      where: {
        id: pairId,
        setId,
        set: {
          authorId: user.id,
        },
      },
    });

    if (!pair) {
      throw new HttpException(
        `cannot find pair ${pairId}`,
        HttpStatus.NOT_FOUND,
      );
    }

    await this.prisma.pair.delete({
      where: {
        id: pair.id,
      },
    });

    return {
      message: `set ${pair.id} succesfully deleted`,
    };
  }

  async updatePair(user, setId: string, pairId: string, body: UpdatePairDto) {
    const { term, definition } = body;
    const pair = await this.prisma.pair.findFirst({
      where: {
        id: pairId,
        setId,
        set: {
          authorId: user.id,
        },
      },
    });

    if (!pair) {
      throw new HttpException(
        `cannot find pair ${pairId}`,
        HttpStatus.NOT_FOUND,
      );
    }

    await this.prisma.pair.update({
      where: {
        id: pair.id,
      },
      data: {
        term,
        definition,
      },
    });

    return {
      message: `set ${pair.id} succesfully updated`,
    };
  }
}
