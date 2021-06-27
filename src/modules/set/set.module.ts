import { Module } from '@nestjs/common';
import { SetService } from './set.service';
import { SetController } from './set.controller';
import { PairModule } from '@/modules/pair/pair.module';

@Module({
  imports: [PairModule],
  providers: [SetService],
  controllers: [SetController],
})
export class SetModule {}
