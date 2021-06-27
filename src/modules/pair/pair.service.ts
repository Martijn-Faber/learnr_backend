import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '@/modules/prisma/prisma.service';
import { CreatePairDto } from './dto/create-pair.dto';

@Injectable()
export class PairService extends Logger {
  constructor(private prisma: PrismaService) {
    super();
  }

  async createPair(setId, body: CreatePairDto) {
    const { term, definition } = body;
    console.log(term, definition);
    const pair = await this.prisma.pair.create({
      data: {
        term,
        definition,
        setId,
      },
    });

    return pair;
  }
}
