import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '@/modules/prisma/prisma.service';

@Injectable()
export class SearchService extends Logger {
  constructor(private prisma: PrismaService) {
    super();
  }

  async search(query: string) {
    const results = await this.prisma.set.findMany({
      where: {
        OR: [
          {
            title: { contains: query, mode: 'insensitive' },
          },
          {
            description: { contains: query, mode: 'insensitive' },
          },
        ],
      },
      select: {
        id: true,
        title: true,
        description: true,
        createdAt: true,
        updatedAt: true,
        author: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    return results;
  }
}
