import { Module } from '@nestjs/common';
import { AuthModule } from '@/modules/auth/auth.module';
import { SetModule } from '@/modules/set/set.module';
@Module({
  imports: [AuthModule, SetModule],
})
export class AppModule {}
