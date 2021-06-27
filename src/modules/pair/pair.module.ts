import { Module } from '@nestjs/common';
import { PairService } from './pair.service';

@Module({
  providers: [PairService],
  exports: [PairService],
})
export class PairModule {}
